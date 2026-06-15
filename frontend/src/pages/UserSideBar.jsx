import { Link } from "react-router-dom";

function UserSideBar() {
  return (
    <div className="sidebar">

      <h2 className="logo">
        User Portal
      </h2>

      <ul>

        <li>
          <Link
            className="menu-link"
            to="/user"
          >
            🏠 Dashboard
          </Link>
        </li>

        <li>
          <Link
            className="menu-link"
            to="/user/profile"
          >
            👤 My Profile
          </Link>
        </li>

        <li>
          <Link
            className="menu-link"
            to="/user/activity"
          >
            📋 My Activities
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default UserSideBar;