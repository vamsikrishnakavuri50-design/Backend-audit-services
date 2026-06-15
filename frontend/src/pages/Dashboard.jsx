import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

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