import React from 'react'
import logo from "../../public/b7650c56-0f32-49d3-8dfb-b7ce424f2e96 (1).png";

export default function Navbar() {
    return (
        <div>
            <div className='d-flex justify-content-between bg-secondary align-items-center px-3 '>

                <div style={{ height: "50px" }}>
                    <img
                        src={logo}
                        alt="Text Utils Logo"
                        style={{ width: "160px" }}
                        className='d-flex align-items-center m-0 p-2'
                    />
                </div>

                <div className='mx-5 d-flex gap-4'>
                    <a className='text-white text-decoration-none btn' href="http://localhost:5173/">
                        Home
                    </a>
                    <a className='text-white text-decoration-none btn' href="http://localhost:5173/texts">
                        Text List
                    </a>
                </div>

            </div>
        </div>
    )
}