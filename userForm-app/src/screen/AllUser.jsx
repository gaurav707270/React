import React, { useState, useEffect } from 'react'

export default function AllUser() {

  const [allUser, setAllUser] = useState([])

  const getAllUser = () => {
    setAllUser(JSON.parse(localStorage.getItem("allUsers")) || [])
  }

  useEffect(() => {
    getAllUser()
  }, [])


  return (
    <div className=' d-flex justify-content-center flex-wrap w-100 '>
      {
        allUser.map((user) => {
          return <div className="card shadow-lg border-0 rounded-4 overflow-hidden m-2" style={{ width: "18rem", height: "22  rem" }}>

            <div className="bg-primary text-white text-center py-4">
              <div
                className="rounded-circle bg-white text-primary fw-bold d-flex justify-content-center align-items-center mx-auto"
                style={{ width: "70px", height: "70px", fontSize: "24px" }}
              >
                {user.UserName?.charAt(0).toUpperCase()}
              </div>
              <h4 className="mt-3 mb-0">{user.UserName}</h4>
            </div>

            <div className="card-body">
              <div className="mb-3">
                <strong>Email:</strong>
                <p className="text-muted mb-0">{user.Email}</p>
              </div>

              <div className="mb-3">
                <strong>Password:</strong>
                <p className="text-muted mb-0">{user.Password}</p>
              </div>

              <div className="mb-3">
                <strong>Phone:</strong>
                <p className="text-muted mb-0">{user.Phone}</p>
              </div>

              <div className="mb-3">
                <strong>Address:</strong>
                <p className="text-muted mb-0">{user.Address}</p>
              </div>

              <button className="btn btn-primary w-100 rounded-pill">
                View Profile
              </button>
            </div>
          </div>

        })
      }

    </div>
  )
}
