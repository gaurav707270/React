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
            <div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="role"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div>
                    <button>Submite</button>
                </div>

            </div>
        </div>
    )
}
