import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

// Components
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";

// Pages
import Dashboard from "./screen/dashboard-page/DashboardPage";
import Employees from "./screen/employees-page/EmployeesPage";
import Attendance from "./screen/attendance-page/AttendancePage";
import LeavePage from "./screen/leave-page/LeavePage";

// 🔐 Private Route
const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Navbar />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="leaves" element={<LeavePage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}