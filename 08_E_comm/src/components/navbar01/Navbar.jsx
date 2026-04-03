import React from 'react'
import { useState } from "react";
import logo from "../../assets/logo.png";


export default function Navbar() {

  const [search, setSearch] = useState("");

  const searchProduct = () => {
  }

  searchProduct();


  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">



          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" style={{ width: "120px" }} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/cart">
                  Cart
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>



    </div>


  )
}
