const FILTER_ID = "default-filter";

// Helper: access invoke lazily so Forge bridge is definitely ready at call time.
function getInvoke() { return window.invoke; }


class MultiSelect {
  constructor(container, label, options, onChange) {
    this.container = container;
    this.label = label;
    this.options = options;
    this.selected = [];
    this.onChange = onChange;
    this.render();
  }

  render() {
    this.container.innerHTML = `
      <div class="dropdown">
        <button class="dropdown-btn">${this.label}</button>
        <div class="dropdown-menu"></div>
      </div>
    `;

    this.btn = this.container.querySelector(".dropdown-btn");
    this.menu = this.container.querySelector(".dropdown-menu");

    this.btn.onclick = () => {
      this.menu.style.display =
        this.menu.style.display === "block" ? "none" : "block";
    };

    this.menu.innerHTML = this.options.map(opt =>
      `<div data-value="${opt}">${opt}</div>`
    ).join("");

    this.menu.onclick = (e) => {
      const val = e.target.dataset.value;
      if (!val) return;

      if (this.selected.includes(val)) {
        this.selected = this.selected.filter(v => v !== val);
      } else {
        this.selected.push(val);
      }

      this.updateLabel();
      this.onChange(this.selected);
    };
  }

  updateLabel() {
    this.btn.innerText =
      this.selected.length === 0
        ? this.label
        : this.selected.join(", ");
  }
}


class FilterController {
  constructor() {
    this.filters = {};
    this.tryInit();
  }

  // Retry until Forge bridge is ready
  tryInit() {
    if (!window.ForgeBridge || typeof window.ForgeBridge.invoke !== "function") {
      setTimeout(() => this.tryInit(), 300);
      return;
    }
    this.init();
  }

  async init() {
    const invoke = window.ForgeBridge.invoke;
    const projects = await invoke("getProjects");

    this.project = new MultiSelect(
      document.getElementById("projectFilter"),
      "Project",
      projects.map(p => p.key),
      (val) => this.update({ project: val[0] })
    );

    this.status = new MultiSelect(
      document.getElementById("statusFilter"),
      "Status",
      ["To Do", "In Progress", "Done"],
      (val) => this.update({ status: val })
    );

    this.assignee = new MultiSelect(
      document.getElementById("assigneeFilter"),
      "Assignee",
      ["User1", "User2"],
      (val) => this.update({ assignee: val })
    );

    this.loadSmartFilters();
  }

  update(newData) {
    this.filters = { ...this.filters, ...newData };
    window.ForgeBridge.invoke("updateFilterState", {
      richFilterId: FILTER_ID,
      filters: this.filters
    });
  }

  async loadSmartFilters() {
    const filters = await window.ForgeBridge.invoke("getSmartFilters", {
      richFilterId: FILTER_ID
    });

    const container = document.getElementById("smartFilters");

    container.innerHTML = filters.map(f =>
      `<span class="tag" data-jql="${f.jql}">${f.name}</span>`
    ).join("");

    container.onclick = (e) => {
      const jql = e.target.dataset.jql;
      if (!jql) return;
      window.ForgeBridge.invoke("updateFilterState", {
        richFilterId: FILTER_ID,
        filters: { baseJql: jql }
      });
    };
  }
}


new FilterController();