import React ,{useState}from 'react'

export default function Form() {
  return (
    <div className='d-flex justify-content-center vh-100 align-items-center vh-100'>
      <form className='w-25 bg-dark p-5 rounded'>
        <div className="mb-3">

          <label htmlFor="exampleInputEmail1" className="form-label text-white">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <label htmlFor="exampleInputEmail1" className="form-label mt-3 text-white">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <div id="emailHelp" className="form-text text-white">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">


          <label htmlFor="exampleInputPassword1" className="form-label text-white">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <label htmlFor="exampleInputEmail1" className="form-label text-white">
          Phone Number
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />

        <label htmlFor="exampleInputEmail1" className="form-label mt-3 text-white">
          Home Address
        </label>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            defaultValue={""}
          />
          <label htmlFor="floatingTextarea">Comments</label>
        </div>


        <div className="mb-3 form-check mt-3">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label text-white" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

    </div>
  )
}
