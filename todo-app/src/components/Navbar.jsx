import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white " href="#" >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hdrmUQ_FS4Sev-emF2mvg-s_-OPMEo-rJg&s"
                            alt="Logo"
                            width={60}
                            height={34}
                            className="d-inline-block align-text-top mx-2 rounded"
                        />
                        Todo App
                    </a>
                </div>
            </nav>

        </div>
    )
}
