// IssueTable renders Jira issues into the table body.
class IssueTable {
  constructor(tbody) {
    this.tbody = tbody;
  }

  render(issues) {
    if (!issues || issues.length === 0) {
      this.tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#6b778c;padding:20px">No issues found</td></tr>`;
      return;
    }
    this.tbody.innerHTML = issues.map(i => `
      <tr>
        <td style="color:#0052cc;font-weight:600">${i.key}</td>
        <td>${i.fields.summary || ""}</td>
        <td>${this.getStatus(i)}</td>
        <td>${this.getAssignee(i)}</td>
      </tr>
    `).join("");
  }

  getStatus(issue) {
    const s = issue.fields.status?.name || "";
    return `<span style="background:#dfe1e6;padding:3px 6px;border-radius:3px;font-size:11px;font-weight:600">${s}</span>`;
  }

  getAssignee(issue) {
    return issue.fields.assignee?.displayName || "Unassigned";
  }
}

const FILTER_ID = "default-filter";
const statusEl = document.getElementById("status");
const table = new IssueTable(document.getElementById("tableBody"));

function loadIssues() {
  const invoke = window.ForgeBridge && window.ForgeBridge.invoke;
  if (typeof invoke !== "function") {
    statusEl.textContent = "Waiting for Forge bridge...";
    setTimeout(loadIssues, 300);
    return;
  }

  statusEl.textContent = "Loading...";

  invoke("getIssues", { richFilterId: FILTER_ID })
    .then(issues => {
      statusEl.textContent = issues && issues.length ? `${issues.length} issue(s)` : "";
      table.render(issues);
    })
    .catch(err => {
      statusEl.textContent = "Error: " + (err.message || JSON.stringify(err));
      console.error("loadIssues error:", err);
    });
}

setInterval(loadIssues, 10000);
loadIssues();