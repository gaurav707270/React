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

    const [color, setColor] = useState("#3498db");

    const generateRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let randomColor = "#";

        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }

        setColor(randomColor);
        setUserInfo({ ...userInfo, colorCode: color })
        console.log(color)
    };


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
                        Text Field Manager
                    </a>
                </div>
            </nav>

            {/* form section */}
            <div className="container my-5">
                <div className="card shadow-lg border-0 rounded-4">
                    <div className="card-header bg-primary text-white text-center py-3">
                        <h3 className="mb-0">User Information</h3>
                    </div>

                    <div className="card-body p-4">
                        <div className="row g-4 align-items-end">

                            <div className="col-lg-4">
                                <div className="form-floating">
                                    <input
                                        value={userInfo.email}
                                        onChange={getUserEmail}
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Email"
                                    />
                                    <label>Email Address</label>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="form-floating">
                                    <input
                                        value={userInfo.role}
                                        onChange={getUserRole}
                                        type="text"
                                        className="form-control"
                                        id="floatingRole"
                                        placeholder="Role"
                                    />
                                    <label>Job Role</label>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="form-floating">
                                    <input
                                        value={userInfo.password}
                                        onChange={getUserPassword}
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                    />
                                    <label>Password</label>
                                </div>
                            </div>

                            <div className="col-lg-2 d-grid">
                                <button
                                    className={`btn ${isUpdate ? "btn-warning" : "btn-success"} btn-lg`}
                                    onClick={() => {
                                        if (isUpdate) {
                                            handleUpdateUser();
                                            fetchTextList();
                                            generateRandomColor();
                                        } else {
                                            handleSetInfoJson();
                                            fetchTextList();
                                            generateRandomColor();
                                        }
                                    }}
                                >
                                    {isUpdate ? "Update User" : "Add User"}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* diplay user info */}
            <div className="container my-5">
                <div className="row g-4">
                    {textList.map((user, i) => (
                        <div className="col-md-6 col-lg-4" key={i}>
                            <div
                                className="card border-0 rounded-4 shadow-lg h-100"
                                style={{ backgroundColor: user.colorCode }}
                            >
                                <div className="card-body p-4">

                                    <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
                                        <div className='d-flex flex-wrap'>
                                            <h5 className="fw-bold text-dark mb-0">
                                                {user.email}
                                            </h5>
                                        </div>

                                        <span className="badge bg-dark">
                                            {user.role}
                                        </span>
                                    </div>

                                    <hr />

                                    <p className="mb-3">
                                        <strong>Email</strong><br />
                                        {user.email}
                                    </p>

                                    <p className="mb-3">
                                        <strong>Password</strong><br />
                                        {user.password}
                                    </p>

                                    <div className="d-flex justify-content-between mt-4">

                                        <button
                                            className="btn btn-warning rounded-pill px-4"
                                            onClick={() => handleEditUser(user)}
                                        >
                                            <i className="ri-pencil-line me-1"></i>
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-danger rounded-pill px-4"
                                            onClick={() => handleRemoveUser(user)}
                                        >
                                            <i className="ri-delete-bin-6-line me-1"></i>
                                            Delete
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
