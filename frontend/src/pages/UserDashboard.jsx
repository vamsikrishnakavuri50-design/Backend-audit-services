function UserDashboard() {
  return (
    <>
      <h1>User Dashboard</h1>

      <div className="welcome-box">
        <h2>
          Welcome, {localStorage.getItem("username")}
        </h2>

        <p>
          View your profile and recent activities.
        </p>
      </div>

      <div className="cards">

        <div className="card users-card">
          <span className="card-icon">👤</span>
          <h3>Profile</h3>
          <p>1</p>
        </div>

        <div className="card logs-card">
          <span className="card-icon">📋</span>
          <h3>Activities</h3>
          <p>5</p>
        </div>

      </div>
    </>
  );
}

export default UserDashboard;