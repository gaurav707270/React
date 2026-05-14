import React, { useState } from 'react'
import { useNavigate } from "react-router";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };


  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }


    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("User not found, please signup first");
      return;
    }

    if (user.email === form.email && user.password === form.password) {


      localStorage.setItem("isLogin", true);

      if (form.remember) {
        localStorage.setItem("rememberUser", JSON.stringify(form));
      }

      alert("Login Successful 🎉");

      navigate("/");

    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className='mt-5'>
      <div className="container d-flex justify-content-center align-items-center h-75">

        <div className="card shadow p-4" style={{ width: 400 }}>

          <h3 className="text-center mb-4">Login</h3>

          <form onSubmit={handleLogin}>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter email"
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
                placeholder="Enter password"
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Remember me</label>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Login
            </button>

            <div className="text-center mt-3">
              <p>
                Don't have an account?{" "}
                <a href="/register">Sign UP</a>
              </p>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}