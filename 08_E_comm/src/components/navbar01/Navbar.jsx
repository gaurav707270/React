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

      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid ">



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
            <i class="ri-menu-line text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">
                  <i class="ri-home-4-fill mx-1"></i>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="/cart">
                  <i class="ri-shopping-cart-fill mx-1"></i>
                  Cart
                </a>
              </li>

              {/* <li className="nav-item">
                <a className="nav-link disabled text-white" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>

          </div>
        </div>
      </nav>



    </div>


  )
}
