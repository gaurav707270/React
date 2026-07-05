import React from 'react'

export default function Users() {
  return (
    <div>
      <div>
        <div className='container'>
          <form className="row g-3 mt-3 ">
            <div className="col-auto">
              <label htmlFor="inputPassword2" className='my-1' >
                Email
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="email"
              />
            </div>
            <div className="col-auto">
              <label htmlFor="inputPassword2" className="my-1">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Password"
              />
            </div>
            <div className="col-auto d-flex align-items-center">
              <button type="submit" className="btn btn-primary mt-4">
                add user
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
