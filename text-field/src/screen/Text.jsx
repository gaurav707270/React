import React, { useState, useEffect } from 'react'
import axios from "axios";

const textListURL = "http://localhost:3000/textList"

export default function Text() {

    const [textList, setTextList] = useState([])

    const fetchTextList = async () => {
        const res = await axios.get(textListURL)
        setTextList(res.data)
        console.log(textList)
    }

    useEffect(() => {
        fetchTextList()
    }, [])

    const [userInfo, setUserInfo] = useState({})

    const getUserEmail = (e) => {
        setUserInfo({ ...userInfo, email: e.target.value })
    }

    const getUserRole = (e) => {
        setUserInfo({ ...userInfo, role: e.target.value })
    }

    const getUserPassword = (e) => {
        setUserInfo({ ...userInfo, password: e.target.value })
    }

    const handleSetInfoJson = () => {
        setTextList([...textList, userInfo])
        console.log(textList)

    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold" href="#">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hdrmUQ_FS4Sev-emF2mvg-s_-OPMEo-rJg&s"
                            alt="logo"
                            width="50"
                            height="30"
                            className="rounded me-2"
                        />
                        Text Field
                    </a>
                </div>
            </nav>

            {/* form section */}
            <div className='container d-flex justify-content-evenly my-3  align-items-center'>
                <div className="form-floating mb-3 w-25">
                    <input
                        onChange={getUserEmail}
                        type="email"
                        className="form-control shadow"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3 w-25">
                    <input
                        onChange={getUserRole}
                        type="text"
                        className="form-control shadow"
                        id="floatingInput"
                        placeholder="role"
                    />
                    <label htmlFor="floatingInput">Job Role</label>
                </div>

                <div className="form-floating mb-3 w-25">
                    <input
                        onChange={getUserPassword}
                        type="password"
                        className="form-control shadow"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className='mt-2 d-flex align-items-center mb-3'>
                    <button className='btn btn-outline-primary ' onClick={handleSetInfoJson}>Submite</button>
                </div>

            </div>
        </div>
    )
}
