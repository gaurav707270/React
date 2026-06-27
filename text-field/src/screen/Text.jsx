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

    const handleSetInfoJson = async () => {
        const res = await axios.post(textListURL, userInfo);
    }


    const handleRemoveUser = async (user) => {
        const res = await axios.delete(`${textListURL}/${user.id}`)
        fetchTextList()
        console.log(user.id)
    }

    const [isUpdate, setIsUpdate] = useState(false)

    const handleEditUser = (user) => {
        setUserInfo(user)
        fetchTextList()

        setIsUpdate(true)
        console.log(isUpdate)
        console.log("handle edit")
    }

    const handleUpdateUser = async () => {
        const res = await axios.patch(
            `${textListURL}/${userInfo.id}`,
            userInfo
        );

        fetchTextList()

        setIsUpdate(false)
        console.log("handle update")
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
                        value={userInfo.email}
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
                        value={userInfo.role}
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
                        value={userInfo.password}
                        onChange={getUserPassword}
                        type="password"
                        className="form-control shadow"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className='mt-2 d-flex align-items-center mb-3'>
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => {
                            if (isUpdate) {
                                handleUpdateUser();
                                fetchTextList();
                            } else {
                                handleSetInfoJson();
                                fetchTextList();
                            }
                        }}
                    >
                        {isUpdate ? "Update User" : "Submit"}
                    </button>
                </div>

            </div>

            {/* diplay user info */}
            <div className="container mt-4">
                <div className="row">
                    {textList.map((user, i) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={i}>
                            <div className="card shadow-sm h-100">
                                <div className="card-body">
                                    <h5 className="card-title mb-3">{user.email}</h5>

                                    <p className="mb-2">
                                        <strong>Role :</strong> {user.role}
                                    </p>

                                    <p className="mb-4">
                                        <strong>Password :</strong> {user.password}
                                    </p>

                                    <div className="d-flex justify-content-end gap-2">
                                        <button
                                            className="btn btn-outline-primary btn-sm ri-pencil-ai-line"
                                            onClick={() => handleEditUser(user)}
                                        >
                                        </button>

                                        <button onClick={() => {
                                            handleRemoveUser(user)
                                        }} className="btn btn-outline-danger ri-delete-bin-5-line btn-sm">

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}
