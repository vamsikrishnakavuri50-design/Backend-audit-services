import { Link } from "react-router-dom";

function AuditorSideBar() {
  return (
    <div className="sidebar">

      <h2 className="sidebar-title">
        Audit Monitor
      </h2>

      <nav>

        <Link
          to="/auditor"
          className="nav-link"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/auditor/logs"
          className="nav-link"
        >
          📋 Audit Logs
        </Link>

        <Link
          to="/auditor/alerts"
          className="nav-link"
        >
          🚨 Alerts
        </Link>

        <Link
          to="/auditor/reports"
          className="nav-link"
        >
          📑 Reports
        </Link>

        <Link
          to="/auditor/profile"
          className="nav-link"
        >
          👤 My Profile
        </Link>

      </nav>

    </div>
  );
}

export default AuditorSideBar;