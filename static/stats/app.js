// StatsManager renders issue count cards and handles click-to-filter.
class StatsManager {
  constructor(container) {
    this.container = container;
  }

  render(stats, onClick) {
    const cards = [
      { label: "Total",       value: stats.total,                          cls: "total",    filter: null          },
      { label: "To Do",       value: stats.byStatus["To Do"]       || 0,   cls: "todo",     filter: "To Do"       },
      { label: "In Progress", value: stats.byStatus["In Progress"] || 0,   cls: "progress", filter: "In Progress" },
      { label: "Done",        value: stats.byStatus["Done"]        || 0,   cls: "done",     filter: "Done"        }
    ];

    this.container.innerHTML = cards.map(c => `
      <div class="card ${c.cls}" data-filter="${c.filter}">
        <div class="count">${c.value}</div>
        <div class="label">${c.label}</div>
      </div>
    `).join("");

    this.container.onclick = (e) => {
      const card = e.target.closest(".card");
      if (card) {
        const f = card.dataset.filter;
        onClick(f === "null" || f === "undefined" ? null : f);
      }
    };
  }
}

const FILTER_ID = "default-filter";
const statusEl = document.getElementById("status");
const statsUI = new StatsManager(document.getElementById("statsContainer"));

function loadStats() {
  const invoke = window.ForgeBridge && window.ForgeBridge.invoke;
  if (typeof invoke !== "function") {
    statusEl.textContent = "Waiting for Forge bridge...";
    setTimeout(loadStats, 300);
    return;
  }

  statusEl.textContent = "Loading...";

  invoke("getStats", { richFilterId: FILTER_ID })
    .then(data => {
      statusEl.textContent = "";
      statsUI.render(data, applyFilter);
    })
    .catch(err => {
      statusEl.textContent = "Error: " + (err.message || JSON.stringify(err));
      console.error("loadStats error:", err);
    });
}

setInterval(loadStats, 10000);
loadStats();

function applyFilter(status) {
  const invoke = window.ForgeBridge && window.ForgeBridge.invoke;
  if (typeof invoke !== "function") return;
  const filters = status ? { status: [status] } : {};
  invoke("updateFilterState", { richFilterId: FILTER_ID, filters });
}