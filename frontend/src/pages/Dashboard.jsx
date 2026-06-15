import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

// Dashboard component that includes the navigation bar, sidebar, and content area for nested routes

function Dashboard() {
  return (
    <>
      <NavBar />

      <div className="dashboard-layout">
        <SideBar />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;