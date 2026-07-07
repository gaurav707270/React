import React, { useState, useEffect } from 'react'
import axios from "axios"

export default function Users() {

  const [allUser, setAllUser] = useState([])


  const fetchUserData = async () => {
    const res = await axios.get("http://localhost:3000/allUserData")
    setAllUser(res.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  return (
    <div className='container'>
      <div className="container d-flex justify-content-center mt-3">
        <div
          className="card shadow-lg border-0 rounded-4 p-4"
          style={{ maxWidth: "700px", width: "100%" }}
        >
          <h2 className="text-center  fw-bold text-primary">
            Add New User
          </h2>

          <form className="row g-4">
            {/* Email */}
            <div className="col-md-5">
              <label className="form-label fw-semibold">
                <i className="bi bi-envelope-fill me-2"></i>
                Email
              </label>

              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email"
              />
            </div>

            {/* Password */}
            <div className="col-md-5">
              <label className="form-label fw-semibold">
                <i className="bi bi-lock-fill me-2"></i>
                Password
              </label>

              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter Password"
              />
            </div>

            {/* Button */}
            <div className="col-md-2 d-grid align-self-end">
              <button className="btn btn-primary btn-lg">
                <i className="bi bi-person-plus-fill me-2"></i>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>



      <div className='mt-2'>
        <h2 className='text-center'>All Users</h2>

        <div>
          {
            allUser.map((user) => (
              <div key={user.id}>
                <p>{user.email}</p>
                <p>{user.password}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
