import React, { useState, useEffect } from 'react'
import axios from 'axios'

const usersURL = "http://localhost:3000/users"

export default function User() {

  const [allUser, setAllUser] = useState([])

  const fetchUsers = async () => {
    const res = await axios.get(usersURL)
    setAllUser(res.data)
    console.log(allUser)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      {
        allUser.map((user) => <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="user"
                    width="100"
                    className="mb-3"
                  />

                  <h3 className="card-title">{user.name}</h3>
                  <p className="text-muted">{user.email}</p>

                  <hr />

                  <div className="d-flex justify-content-between px-3">
                    <span>
                      <strong>Age:</strong> {user.age}
                    </span>

                    <span>
                      <strong>City:</strong> {user.city}
                    </span>
                  </div>

                  <div className="mt-4">
                    <button className="btn btn-primary me-2">
                      Edit
                    </button>

                    <button className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}
