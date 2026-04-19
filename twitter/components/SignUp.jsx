import React, { useState } from 'react'
import axios from "axios";
import { userApi } from '../utils/Api.js'


export const SignUp = () => {

  const [user, setUser] = useState({});
  const [check, setcheck] = useState(false);
  const [style, setstyle] = useState({ name: false, email: false, number: false, fees: false, password: false, })

  const handleSignUp = async (e) => {

    const res = await axios.post(userApi, user)
    if (res.status == 201) {
      alert("User Sign Up Successfully ✅")
    } else {
      alert("User Cant SingUP")
    }


    e.preventDefault()

    const nameRegex = /^[A-Za-z ]{3,}$/;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const feesRegex = /^(100[1-9]|10[1-9]\d|1[1-9]\d{2}|[2-9]\d{3,})$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!user.name || user.name.trim() === "") {
      setstyle({ ...style, name: true })
      alert("Name is required!");

      return false;
    }
    else if (!nameRegex.test(user.name)) {
      alert("Name must contain only letters (min 3 characters)");
      return false;
    }

    if (!user.email || user.email.trim() === "") {
      setstyle({ ...style, email: true })
      alert("Email is required !")
      return false;

    }

    else if (!emailRegex.test(user.email)) {
      alert("email must stornge ")
      return false;
    }


    if (!feesRegex.test(user.number)) {
      alert("Enter a valid fees greater than 1000!");
      return false;
    }


    if (!user.number || user.number.trim() === "") {
      setstyle({ ...style, number: true })
      alert("Phone number is required!");
      return false;
    }
    else if (!phoneRegex.test(user.number)) {
      alert("Enter a valid 10-digit number!");
      return false;
    }

    if (!user.password || user.password.trim() === "") {
      setstyle({ ...style, number: true })
      alert("Password is required!");
      return false;
    }
    else if (!passwordRegex.test(user.password)) {
      alert("Password must be at least 6 characters, include uppercase, lowercase, and number");
      return false;
    }

    else {





      // alert("Form Sign Up Successfully ✅");
    }
  }



  return (
    < >
      <div className='container-fluid d-flex justify-content-center  align-items-center vh-75 mt-5   '>
        <div className=' w-50 d-flex justify-content-center align-items-center '>

          <form style={{ width: 450, }} onSubmit={handleSignUp} className=' shadow p-3 rounded rounded-4 bg-white'>
            <div className="mb-3">

              {/*Full name*/}
              <label htmlFor="name" className="d-flex">
                Full Name
              </label>
              <input
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                type="text"
                className={`form-control ${style.name == false ? "" : " border-danger"}`}
                id="name"
                aria-describedby="emailHelp"
              />
            </div>

            {/* Email  */}
            <div className="mb-3 bg-white">
              <label htmlFor="email" className="d-flex">
                Email address
              </label>
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                className={`form-control ${style.email == false ? "" : " border-danger"}`}
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            {/* contact */}
            <div className="mb-3">
              <label htmlFor="contact" className="d-flex">
                Contact
              </label>
              <input
                onChange={(e) => setUser({ ...user, number: e.target.value })}
                type="Number"
                className={`form-control ${style.number == false ? "" : " border-danger"}`}
                id="number"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your contact with anyone else.
              </div>
            </div>



            {/* password */}
            <div className="mb-3">
              <label htmlFor="Password" className="d-flex">
                Password
              </label>
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                className="form-control"
                id="Password"
              />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" checked={check} onChange={() => setcheck(!check)} className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check After Reading All Term & Condition
              </label>
            </div>
            <button type="submit" className={`btn btn-primary ${check ? "" : "disabled"}`}>
              Submit
            </button>
          </form>
        </div>
      </div>

    </>
  )
}
