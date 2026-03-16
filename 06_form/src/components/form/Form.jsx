import React, { useState } from 'react'

export const Form = () => {
    const [user, setUser] = useState({});
    const [check, setcheck] = useState(false);

    const handleSubmit = () => {
        localStorage.setItem("user", JSON.stringify(user));
        alert("info submited");
    }

    return (
        <>
            <div className='container d-flex justify-content-center  align-items-center vh-100'>
                <div className=' w-50 d-flex justify-content-center align-items-center '>

                    <form onSubmit={handleSubmit} className=' w-75 shadow p-3 '>
                        <div className="mb-3">

                            {/*Full name*/}
                            <label htmlFor="name" className="form-label">
                                Full Name
                            </label>
                            <input
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="emailHelp"
                            />
                        </div>

                        {/* Email  */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>

                        {/* contact */}
                        <div className="mb-3">
                            <label htmlFor="contact" className="form-label">
                                Contact
                            </label>
                            <input
                                onChange={(e) => setUser({ ...user, number: e.target.value })}
                                type="Number"
                                className="form-control"
                                id="number"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>

                        {/* password */}
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label">
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
