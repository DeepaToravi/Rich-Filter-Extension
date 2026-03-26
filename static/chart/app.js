// ChartManager handles all chart rendering (pie / bar) and group-by logic.
class ChartManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.chart = null;
    this.type = "pie";
    this.groupBy = "status";
  }

  setType(type) { this.type = type; }
  setGroupBy(groupBy) { this.groupBy = groupBy; }

  render(issues) {
    const grouped = this.groupData(issues);
    const labels = Object.keys(grouped);
    const values = Object.values(grouped);

    if (this.chart) this.chart.destroy();

    this.chart = new Chart(this.canvas, {
      type: this.type,
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: labels.map((_, i) => `hsl(${i * 40}, 60%, 60%)`)
        }]
      },
      options: { responsive: true }
    });
  }

  groupData(issues) {
    const result = {};
    issues.forEach(i => {
      let key;
      if (this.groupBy === "status")   key = i.fields.status?.name             || "Unknown";
      if (this.groupBy === "assignee") key = i.fields.assignee?.displayName    || "Unassigned";
      if (this.groupBy === "priority") key = i.fields.priority?.name           || "Unknown";
      result[key] = (result[key] || 0) + 1;
    });
    return result;
  }
}

const FILTER_ID = "default-filter";
const status = document.getElementById("chartStatus");
const chart = new ChartManager(document.getElementById("chartCanvas"));

// Access window.invoke at call time (not at load time) so Forge bridge is ready.
// Forge runtime injects invoke; the CDN script above covers forge tunnel mode.
function loadChart() {
  const invoke = window.ForgeBridge && window.ForgeBridge.invoke;
  if (typeof invoke !== "function") {
    status.textContent = "Waiting for Forge bridge...";
    setTimeout(loadChart, 300);
    return;
  }

  status.textContent = "Loading...";

  invoke("getIssues", { richFilterId: FILTER_ID })
    .then(issues => {
      if (!issues || issues.length === 0) {
        status.textContent = "No issues found.";
        return;
      }
      status.textContent = "";
      chart.render(issues);
    })
    .catch(err => {
      status.textContent = "Error: " + (err.message || JSON.stringify(err));
      console.error("loadChart error:", err);
    });
}

setInterval(loadChart, 10000);
loadChart();

document.getElementById("pieBtn").onclick    = () => { chart.setType("pie");         loadChart(); };
document.getElementById("barBtn").onclick    = () => { chart.setType("bar");         loadChart(); };
document.getElementById("statusBtn").onclick   = () => { chart.setGroupBy("status");   loadChart(); };
document.getElementById("assigneeBtn").onclick = () => { chart.setGroupBy("assignee"); loadChart(); };
document.getElementById("priorityBtn").onclick = () => { chart.setGroupBy("priority"); loadChart(); };