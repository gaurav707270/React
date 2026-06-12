import React from 'react'
import { Link } from "react-router";

export default function Navbar() {
    return (

        <div style={{ width: "120px", height: "100vh", backgroundColor: "#ECE5D8" }} className=' text-black d-flex justify-content-center align-items-center justify-content-end shadow '>
            <ul className="list-unstyled h-50 d-flex flex-column justify-content-between" >
                <Link className='text-decoration-none text-black' to={"/Home"}>
                    <li className="d-flex align-items-center flex-column gap-2 mb-3">
                        <i className="ri-home-3-line fs-4"></i>
                        <span>Home</span>
                    </li>
                </Link>

                <Link className='text-decoration-none text-black' to={"/Projects"}>
                    <li className="d-flex align-items-center flex-column gap-2 mb-3">
                        <i className="ri-arrow-right-line fs-4"></i>
                        <span>Projects</span>
                    </li>

                </Link>


                <Link className='text-decoration-none text-black' to={"/Experience"}>
                    <li className="d-flex align-items-center flex-column gap-2 mb-3">
                        <i className="ri-briefcase-3-line fs-4"></i>
                        <span>Experience</span>
                    </li>
                </Link>

                <Link className='text-decoration-none text-black' to={"/Contect"}>
                    <li className="d-flex align-items-center flex-column gap-2 mb-3">
                        <i className="ri-mail-line fs-4"></i>
                        <span>Contact</span>
                    </li>
                </Link>
            </ul>
        </div>
    )
}  