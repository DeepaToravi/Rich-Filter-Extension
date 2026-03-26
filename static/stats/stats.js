export class StatsManager {
  constructor(container) {
    this.container = container;
  }

  render(stats, onClick) {
    const cards = [
      { label: "Total", value: stats.total, class: "total", filter: null },
      { label: "To Do", value: stats.byStatus["To Do"] || 0, class: "todo", filter: "To Do" },
      { label: "In Progress", value: stats.byStatus["In Progress"] || 0, class: "progress", filter: "In Progress" },
      { label: "Done", value: stats.byStatus["Done"] || 0, class: "done", filter: "Done" }
    ];

    this.container.innerHTML = cards.map(c => `
      <div class="card ${c.class}" data-filter="${c.filter}">
        <div class="count">${c.value}</div>
        <div class="label">${c.label}</div>
      </div>
    `).join("");

    this.container.onclick = (e) => {
      const filter = e.target.closest(".card")?.dataset.filter;
      if (filter !== undefined) {
        onClick(filter);
      }
    };
  }
}