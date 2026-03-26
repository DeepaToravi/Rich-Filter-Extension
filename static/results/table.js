export class IssueTable {
  constructor(container) {
    this.container = container;
  }

  render(issues) {
    this.container.innerHTML = issues.map(i => `
      <tr>
        <td style="color:#0052cc; font-weight:600">${i.key}</td>
        <td>${i.fields.summary}</td>
        <td>${this.getStatus(i)}</td>
        <td>${this.getAssignee(i)}</td>
      </tr>
    `).join("");
  }

  getStatus(issue) {
    const s = issue.fields.status?.name || "";
    return `<span style="
      background:#dfe1e6;
      padding:3px 6px;
      border-radius:3px;
      font-size:11px;
      font-weight:600;
    ">${s}</span>`;
  }

  getAssignee(issue) {
    return issue.fields.assignee?.displayName || "Unassigned";
  }
}