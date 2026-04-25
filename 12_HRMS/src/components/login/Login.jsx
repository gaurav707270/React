import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("employee"); // default

    const handleLogin = () => {
        if (!email || !password) return alert("Please fill all fields");

        const user = { email, role };
        localStorage.setItem("user", JSON.stringify(user));

        window.location.href = "/dashboard";
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

            <div className="card shadow-lg border-0 p-4" style={{ width: "350px", borderRadius: "15px" }}>

                {/* Title */}
                <div className="text-center mb-3">
                    <h3 className="fw-bold">Welcome Back 👋</h3>
                    <p className="text-muted" style={{ fontSize: "14px" }}>
                        Login to your HRMS account
                    </p>
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password "
                        className="form-control"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* 🔥 Role Selection */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">Select Role</label>

                    <div className="d-flex justify-content-between">

                        <div>
                            <input
                                type="radio"
                                name="role"
                                value="manager"
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <label className="ms-1">Manager</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                name="role"
                                value="hr"
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <label className="ms-1">HR</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                name="role"
                                value="employee"
                                checked={role === "employee"}
                                onChange={(e) => setRole(e.target.value)}
                            />
                            <label className="ms-1">Employee</label>
                        </div>



                    </div>
                </div>

                {/* Button */}
                <button className="btn btn-outline-primary w-100 fw-bold" onClick={handleLogin}>
                    Login
                </button>

            </div>
        </div>
    );
}