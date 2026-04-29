import React from 'react'

export default function Login() {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center h-75">
        <div className="card shadow p-4" style={{ width: 400 }}>
          <h3 className="text-center mb-4">Login</h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Remember me</label>
            </div>
            <button type="submit" className="btn btn-dark w-100">
              Login
            </button>
            <div className="text-center mt-3">
              <p>
                Don't have an account?{" "}
                <a href="http://127.0.0.1:5500/sign-up.html">Sign UP </a>
              </p>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}
