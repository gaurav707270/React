import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="d-flex">

            {/* Sidebar */}
            <div className="bg-dark text-white p-3" style={{ width: "220px", height: "100vh" }}>
                <h4>HRMS</h4>

                <ul className="nav flex-column mt-4">
                    <li><Link className="nav-link text-white" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="nav-link text-white" to="/employees">Employees</Link></li>
                    <li><Link className="nav-link text-white" to="/attendance">Attendance</Link></li>
                    <li><Link className="nav-link text-white" to="/leaves">Leaves</Link></li>
                </ul>
            </div>

            {/* Page Content */}
            <div className="flex-grow-1 p-4">
                <Outlet />
            </div>

        </div>
    );
}