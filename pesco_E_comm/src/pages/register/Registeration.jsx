import React, { useState } from 'react'
import { useNavigate } from "react-router";

export default function Registeration() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // 🔹 Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("All fields required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Password not match");
      return;
    }

    // 🔹 Save user
    const user = {
      name: form.name,
      email: form.email,
      password: form.password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account Created Successfully 🎉");

    navigate("/login");
  };

  return (
    <div className='mt-5'>
      <div className="container d-flex justify-content-center align-items-center h-75">

        <div className="card shadow p-4" style={{ width: 450 }}>

          <h3 className="text-center mb-4">Create Account</h3>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Sign Up
            </button>

            <div className="text-center mt-3">
              <p>
                Already have an account?{" "}
                <a href="/login">Login</a>
              </p>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}