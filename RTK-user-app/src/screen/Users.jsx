import React, { useState, useEffect, useRef } from 'react'
import axios from "axios"

export default function Users() {

  const [allUser, setAllUser] = useState([])

  // fetching data
  const fetchUserData = async () => {
    const res = await axios.get("http://localhost:3000/allUserData")
    setAllUser(res.data)
  }

  // create new user variabl
  const userEmailRef = useRef(null)
  const userPasswordRef = useRef(null)

  // post new user data
  const postNewUserData = async (newUser) => {
    const res = await axios.post("http://localhost:3000/allUserData", newUser)
  }

  // nosubmite submite function
  const handleSubmite = () => {

    const newUser = {
      email: userEmailRef.current.value,
      password: userPasswordRef.current.value
    }

    postNewUserData(newUser)
    console.log(newUser)
  }

  // remove user function

  let index = null

  const removeUser = (i) => {
    index = i

    setAllUser(allUser.filter((user, i) => i != index))
    console.log(allUser)
  }

  const putUserData = async (allUser) => {
    const res = await axios.put("http://localhost:3000/allUserData/1", allUser);
  }



  useEffect(() => {
    fetchUserData()
    putUserData()
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

          <form onSubmit={handleSubmite} className="row g-4" >
            {/* Email */}
            <div className="col-md-5">
              <label className="form-label fw-semibold">
                <i className="bi bi-envelope-fill me-2"></i>
                Email
              </label>

              <input
                ref={userEmailRef}
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
                ref={userPasswordRef}
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



      <div className="container mt-3">
        <div className="card shadow-lg border-0 rounded-4">
          <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
            <h3 className="mb-0">👥 All Users</h3>
            <span className="badge bg-primary fs-6">
              Total Users: {allUser.length}
            </span>
          </div>

          <div
            className="card-body overflow-auto"
            style={{ maxHeight: "500px" }}
          >
            {allUser.length === 0 ? (
              <div className="text-center py-5">
                <h5 className="text-muted">No Users Found 😔</h5>
              </div>
            ) : (
              allUser.map((user, i) => (
                <div
                  key={user.id}
                  className="card shadow-sm border-0 rounded-3 mb-3"
                >
                  <div className="card-body d-flex justify-content-between align-items-center flex-wrap">

                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                        style={{
                          width: "60px",
                          height: "60px",
                          fontSize: "24px",
                          fontWeight: "bold",
                        }}
                      >
                        {user.email.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <h5 className="mb-1">{user.email}</h5>
                        <p className="text-muted mb-0">
                          🔒 {user.password}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 mt-md-0">
                      <button className="btn btn-warning me-2">
                        ✏️ Update
                      </button>

                      <button onClick={() => {
                        removeUser(i)

                      }} className="btn btn-danger">
                        🗑 Remove
                      </button>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
