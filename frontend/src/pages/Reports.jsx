function Reports() {
  return (
    <div style={{ color: "white", padding: "20px" }}>
      <h2>Audit Reports</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Report Name</th>
            <th>Created Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Monthly Audit Report</td>
            <td>13-06-2026</td>
            <td>Generated</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Reports;