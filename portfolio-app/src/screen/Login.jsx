import React, { useState } from 'react'
import { useNavigate } from "react-router";

const user = {
    email: "sachinkharate2004@gmail.com",
    password: "sachin7072"
}

export default function Login() {
    const [newUser, setNewUser] = useState({})

    const navigate = useNavigate()

    const addEmail = (e) => {
        setNewUser({ ...newUser, email: e.target.value })
    }

    const addPassword = (e) => {
        setNewUser({ ...newUser, password: e.target.value })
    }

    const checkUser = () => {
        if (user.email == newUser.email && user.password == newUser.password) {
            navigate("/Home")
            alert(hjdwwhj)
        }
        else if (newUser.email == " ") {
            alert("Enter the Email")
        }
        else if (newUser.password == "") {
            alert("enter the Password")
        }
        else {
            alert("Enter the correct Email & Password")
        }
    }

    return (
        <div className=' w-100 d-flex justify-content-center align-items-center'>
            <form className='shadow p-5 rounded' style={{ width: "400px" }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>

                    <input
                        onChange={addEmail}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>

                    <input
                        onChange={addPassword}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3 form-check">

                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />

                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div>

                <button onClick={checkUser} type="submit" className="btn btn-primary">
                    Submit
                </button>

            </form>

        </div>
    )
}
