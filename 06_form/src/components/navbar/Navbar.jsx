import React from 'react'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  text-white bg-secondary">
                <div className="container-fluid ">
                    <a className="navbar-brand fs-3 text-white" href="/">
                        <i class="ri-survey-line text-white"></i>Form
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">

                            </a>
                            <a className="nav-link active text-white" aria-current="page" href="/home">
                                Home
                            </a>
                            <a className="nav-link active text-white" href="/users">
                                Users
                            </a>

                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
