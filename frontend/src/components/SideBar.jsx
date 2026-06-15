import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Users", path: "/dashboard/users", icon: "👥" },
    { name: "Audit Logs", path: "/dashboard/logs", icon: "📜" },
    { name: "Alerts", path: "/dashboard/alerts", icon: "🚨" },
    { name: "Reports", path: "/dashboard/reports", icon: "📑" }
  ];

  return (
    <div className="sidebar">
      <h2 className="logo">Audit Monitor</h2>

      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={
                location.pathname === item.path
                  ? "menu-link active"
                  : "menu-link"
              }
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;