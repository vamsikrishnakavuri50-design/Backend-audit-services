import { Outlet, useNavigate } from "react-router-dom";
import AuditorSideBar from "./AuditorSideBar";

function AuditorLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      
      <div className="topbar">
        <h1 className="logo">
          BankSecure Auditor Portal
        </h1>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-body">
        <AuditorSideBar />

        <div className="content">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default AuditorLayout;