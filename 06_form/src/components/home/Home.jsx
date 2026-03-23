import React, { useEffect, useState } from 'react';

export const Home = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  return (

    <div className="container mt-5 rounded rounded-4">

      <div style={{ width: 500 }}>
        <div className="input-group mb-3">
          <input

            onChange={(e) => {
              setSearch(e.target.value)
            }}
            style={{ width: 300 }}
            value={search}
            type="text"
            id='input'
            className="form-control border border-black"
            aria-label="Recipient’s username"
            aria-describedby="button-addon2"
          />
          <button

            onClick={() => {
              setUsers(users.filter((user) => user.name.toLowerCase() === search.toLowerCase() || user.email.toLowerCase() === search.toLowerCase() || user.number === search))
            }}
            className="btn btn-outline-primary"
            type="button"
            id="search"
          >
            Search
          </button>

          <button

            onClick={() => {
              setUsers(JSON.parse(localStorage.getItem("users")))
              setSearch("")
            }}
            className="btn btn-outline-danger"
            type="button"
            id="search"
          >
            Clear
          </button>

        </div>

      </div>
      <h2 className="text-center mb-4">All Users</h2>

      <div className="shadow rounded rounded-4 bg-amber-50 p-4">


        <div style={{ maxHeight: "470px", overflowY: "auto" }}>

          <table className="table table-bordered">
            <thead className="table-dark sticky-top">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Password</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.number}</td>
                    <td>{user.password}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No Users Found ❌
                  </td>
                </tr>
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};
