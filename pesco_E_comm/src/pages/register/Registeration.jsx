import React from 'react'

export default function Registeration() {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center h-75">
        <div className="card shadow p-4" style={{ width: 450 }}>
          <h3 className="text-center mb-4">Create Account</h3>
          <form id="signupForm">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" required="" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required="" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required=""
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                required=""
              />
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Sign Up
            </button>
            <div className="text-center mt-3">
              <p>
                Already have an account?{" "}
                <a href="http://127.0.0.1:5500/login.html#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
