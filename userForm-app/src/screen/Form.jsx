import React, { useState, useEffect } from 'react'
import { Link } from "react-router";

export default function Form() {

  const [user, setUser] = useState({})
  const [allUser, setAllUser] = useState([])

  const getAllUser = () => {
    const users = JSON.parse(localStorage.getItem("allUsers")) || []
    setAllUser(users)
  }

  useEffect(() => {
    getAllUser()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedUsers = [...allUser, user]

    setAllUser(updatedUsers)

    localStorage.setItem(
      "allUsers",
      JSON.stringify(updatedUsers)
    )

    console.log(updatedUsers)

    setUser({})
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='d-flex flex-column'>
        <img style={{ width: "300px" }} src="https://cdn-icons-png.flaticon.com/512/1486/1486433.png" alt="" />
        <div className='text-center'>
          <Link style={{ width: "100px" }} to="/allUser" className='btn btn-outline-info'>  All Users</Link>

        </div>
      </div>
      <form
        className='w-25 bg-dark p-5 rounded'
        onSubmit={handleSubmit}
      >
        <div className="mb-3">

          <label
            htmlFor="userName"
            className="form-label text-white"
          >
            User Name
          </label>

          <input
            value={user.UserName || ""}
            onChange={(e) => {
              setUser({
                ...user,
                UserName: e.target.value
              })
            }}
            type="text"
            className="form-control"
            id="userName"
          />

          <label
            htmlFor="email"
            className="form-label mt-3 text-white"
          >
            Email Address
          </label>

          <input
            value={user.Email || ""}
            onChange={(e) => {
              setUser({
                ...user,
                Email: e.target.value
              })
            }}
            type="email"
            className="form-control"
            id="email"
          />

          <div className="form-text text-white">
            We'll never share your email with anyone else.
          </div>

        </div>

        <div className="mb-3">

          <label
            htmlFor="password"
            className="form-label text-white"
          >
            Password
          </label>

          <input
            value={user.Password || ""}
            onChange={(e) => {
              setUser({
                ...user,
                Password: e.target.value
              })
            }}
            type="password"
            className="form-control"
            id="password"
          />

        </div>

        <label
          htmlFor="phone"
          className="form-label text-white"
        >
          Phone Number
        </label>

        <input
          value={user.Phone || ""}
          onChange={(e) => {
            setUser({
              ...user,
              Phone: e.target.value
            })
          }}
          type="number"
          className="form-control"
          id="phone"
        />

        <label
          htmlFor="address"
          className="form-label mt-3 text-white"
        >
          Home Address
        </label>

        <div className="form-floating">

          <textarea
            value={user.Address || ""}
            onChange={(e) => {
              setUser({
                ...user,
                Address: e.target.value
              })
            }}
            className="form-control"
            placeholder="Leave a comment here"
            id="address"
          />

          <label htmlFor="address">
            Comments
          </label>

        </div>

        <div className="mb-3 form-check mt-3">

          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />

          <label
            className="form-check-label text-white"
            htmlFor="exampleCheck1"
          >
            Check me out
          </label>

        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>

      </form>
    </div>
  )
}