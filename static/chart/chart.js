export class ChartManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.chart = null;
    this.type = "pie";
    this.groupBy = "status";
  }

  setType(type) {
    this.type = type;
  }

  setGroupBy(groupBy) {
    this.groupBy = groupBy;
  }

  render(issues) {
    const grouped = this.groupData(issues);

    const labels = Object.keys(grouped);
    const values = Object.values(grouped);

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(this.canvas, {
      type: this.type,
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: labels.map((_, i) =>
            `hsl(${i * 40}, 60%, 60%)`
          )
        }]
      }
    });
  }

  groupData(issues) {
    const result = {};

    issues.forEach(i => {
      let key = "";

      if (this.groupBy === "status") {
        key = i.fields.status?.name || "Unknown";
      }

      if (this.groupBy === "assignee") {
        key = i.fields.assignee?.displayName || "Unassigned";
      }

      if (this.groupBy === "priority") {
        key = i.fields.priority?.name || "Unknown";
      }

      result[key] = (result[key] || 0) + 1;
    });

    return result;
  }
}