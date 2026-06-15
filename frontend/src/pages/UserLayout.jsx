import { Outlet, Link, useNavigate } from "react-router-dom";

function UserLayout() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <h1>BankSecure User Portal</h1>

        <button
          className="logout-btn"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-layout">
        <div className="sidebar">
          <h2 className="logo">
            User Panel
          </h2>

          <ul>
            <li>
              <Link className="menu-link" to="/user">
                🏠 Dashboard
              </Link>
            </li>

            <li>
              <Link className="menu-link" to="/user/profile">
                👤 My Profile
              </Link>
            </li>

            <li>
              <Link className="menu-link" to="/user/activity">
                📋 My Activities
              </Link>
            </li>
          </ul>
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default UserLayout;