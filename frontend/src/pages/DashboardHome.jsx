function DashboardHome() {
  return (

    // Main dashboard component
    <>
      <h1>Audit Monitoring Dashboard</h1>

      <div className="welcome-box">
        <h2>Welcome, {localStorage.getItem("username")}</h2>
        <p>Monitor audit activities, logs, and security alerts.</p>
      </div>

      <div className="cards">

        <div className="card users-card">
          <span className="card-icon">👥</span>
          <h3>Total Users</h3>
          <p>3</p>
        </div>

        <div className="card logs-card">
          <span className="card-icon">📄</span>
          <h3>Total Logs</h3>
          <p>37</p>
        </div>

        <div className="card alerts-card">
          <span className="card-icon">🚨</span>
          <h3>Alerts</h3>
          <p>3</p>
        </div>

        <div className="card failed-card">
          <span className="card-icon">🔒</span>
          <h3>Failed Logins</h3>
          <p>10</p>
        </div>

      </div>

      <footer className="footer">
        <p>&copy; 2026 Audit Monitoring Dashboard. All rights reserved.</p>
      </footer>
    </>
  );
}

export default DashboardHome;