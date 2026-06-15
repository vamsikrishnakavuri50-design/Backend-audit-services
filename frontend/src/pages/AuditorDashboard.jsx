function AuditorDashboard() {
  return (
    <div>

      // Page title

      <h1 className="page-title">
        Auditor Dashboard
      </h1>

      <div className="cards">

        <div className="card">
          <h3>Audit Logs</h3>
          <h1>View</h1>
        </div>

        <div className="card">
          <h3>Security Alerts</h3>
          <h1>View</h1>
        </div>

        // New card for reports

        <div className="card">
          <h3>Reports</h3>
          <h1>View</h1>
        </div>

      </div>

    </div>
  );
}

export default AuditorDashboard;