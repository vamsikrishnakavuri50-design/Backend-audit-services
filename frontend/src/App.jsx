import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

// Admin Pages
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import Users from "./pages/Users";
import Logs from "./pages/Logs";
import Alerts from "./pages/Alerts";
import Reports from "./pages/Reports";

// User Pages
import UserLayout from "./pages/UserLayout";
import UserDashboard from "./pages/UserDashboard";
import Profile from "./pages/Profile";
import MyActivities from "./pages/MyActivities";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Admin Routes */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        >
          <Route
            index
            element={<DashboardHome />}
          />

          <Route
            path="users"
            element={<Users />}
          />

          <Route
            path="logs"
            element={<Logs />}
          />

          <Route
            path="alerts"
            element={<Alerts />}
          />

          <Route
            path="reports"
            element={<Reports />}
          />
        </Route>

        {/* User Routes */}
        <Route
          path="/user"
          element={<UserLayout />}
        >
          <Route
            index
            element={<UserDashboard />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="activity"
            element={<MyActivities />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;