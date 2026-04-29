import React from 'react'

export default function Navbar() {
  return (
    <div>
      <>
        {/*logo input support section */}
        <section>
          <div className="d-flex w-100 justify-content-between align-items-center p-3 m-0 flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3  ">
            <div>
              <img
                width="250px"
                className="shadow p-2 rounded object-fit-cover"
                src="https://html.pixelfit.agency/pesco/assets/images/logo/logo-main.png"
                alt="logo"
              />
            </div>
            <div className="d-flex mb-3  mt-3 col col-sm-6  ">
              <input
                type="text"
                className="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
              >
                Button
              </button>
            </div>
            <div>
              <div className="d-flex text-end d-none d-lg-block">
                <div className="d-inline-block">
                  <i className="ri-phone-line fs-1 m-2" />
                </div>
                <div className="d-inline-block">
                  <p className="m-0">Support 24/7</p>
                  <p className="m-0">+91 : 9832353832</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* menu bar section */}
        <section className="w-100 d-flex p-2 light-orange align-items-center ">
          <div className="w-100  ">
            {/* side bar */}
            <div className=" w-100 d-flex justify-content-evenly ">
              <nav className="navbar navbar-expand-lg bg-body-tertiary w-100">
                <div className="container-fluid">
                  {/* Products Category section */}
                  <div className="d-flex col-12 col-sm-12 col-lg-2 justify-content-between">
                    <div>
                      <div className="navbar-brand" href="#">
                        <div className="dropdown ">
                          <button
                            className="btn btn-secondary dropdown-toggle shadow  "
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="ri-list-unordered text-light shadow" />{" "}
                            Products Category
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button className="dropdown-item" type="button">
                                <div className="d-flex ">
                                  <img
                                    height="30px"
                                    src="https://html.pixelfit.agency/pesco/assets/images/icon/shirt.png"
                                    alt=""
                                  />
                                  <p>Man Shirts</p>
                                </div>
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item" type="button">
                                <div className="d-flex">
                                  <img
                                    height="30px"
                                    src="	https://html.pixelfit.agency/pesco/assets/images/icon/denim.png"
                                    alt=""
                                  />
                                  <p>Denim Jeans</p>
                                </div>
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item" type="button">
                                <div className="d-flex">
                                  <img
                                    height="30px"
                                    src="https://html.pixelfit.agency/pesco/assets/images/icon/suit.png"
                                    alt=""
                                  />
                                  <p>Casual Suit</p>
                                </div>
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item" type="button">
                                <div className="d-flex">
                                  <img
                                    height="30px"
                                    src="https://html.pixelfit.agency/pesco/assets/images/icon/dress.png"
                                    alt=""
                                  />
                                  <p>Summer Dress</p>
                                </div>
                              </button>
                            </li>
                            <li>
                              <button className="dropdown-item" type="button">
                                <div className="d-flex">
                                  <img
                                    height="30px"
                                    src="https://html.pixelfit.agency/pesco/assets/images/icon/sweaters.png"
                                    alt=""
                                  />
                                  <p>Sweaters</p>
                                </div>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* hidden menu button div */}
                    <div className=" d-flex  justify-content-end ">
                      <button
                        className="navbar-toggler "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon" />
                      </button>
                    </div>
                  </div>
                  {/* meain all menu are  dropdown section  */}
                  <div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <div
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            <div className="btn-group w-100 m-2 ">
                              <button
                                className="btn btn-secondary dropdown-toggle w-100 "
                                type="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="true"
                                aria-expanded="false"
                              >
                                Home
                              </button>
                              <ul className="dropdown-menu w-100 m-2 text-center">
                                <li>
                                  <a className="dropdown-item" href="/">
                                    Home01
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="/Home_02">
                                    Home02
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="nav-link" href="#">
                            <div className="btn-group w-100 m-2 ">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="inside"
                                aria-expanded="false"
                              >
                                Shop
                              </button>
                              <ul className="dropdown-menu w-100 m-2 text-center">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/shop"
                                  >
                                    Shop Grid
                                  </a>
                                </li>

                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/product"
                                  >
                                    Product Details
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/cart"
                                  >
                                    Cart
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/checkout"
                                  >
                                    Checkout
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/wishlist"
                                  >
                                    Wishlist
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="nav-link" href="#">
                            <div className="btn-group w-100 m-2">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                              >
                                Blog
                              </button>
                              <ul className="dropdown-menu w-100 m-2 text-center">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/blog"
                                  >
                                    Our Blog
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/blog-details"
                                  >
                                    Blog Details
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item">
                          <div className="nav-link" href="#">
                            <div className="btn-group w-100 m-2">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                              >
                                My Account
                              </button>
                              <ul className="dropdown-menu w-100 m-2 text-center">
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="/profile "
                                  >
                                    {" "}
                                    Profile
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="http://127.0.0.1:5500/sign-up.html"
                                  >
                                    {" "}
                                    Sign Up
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="http://127.0.0.1:5500/login.html"
                                  >
                                    {" "}
                                    Login
                                  </a>
                                </li>
                                <li>
                                  <button className="mt-2 btn btn-secondary w-75">
                                    <a
                                      className=" text-decoration-none text-black"
                                      href="#"
                                    >
                                      {" "}
                                      Log Out
                                    </a>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="nav-item active mt-2">
                          <a
                            href="http://127.0.0.1:5500/Contact.html"
                            className="btn btn-secondary w-100 m-2 active"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* deal & card section */}
                  <div>
                    <div className="w-25 d-none d-lg-block  ">
                      <div className="d-flex justify-content-between fs-3 align-items-center">
                        <div className="d-flex text-danger align-items-center">
                          <i className="ri-fire-line" />
                          <p className="mt-3">Deal</p>
                        </div>
                        <i className="ri-star-s-fill fs-5   " />
                        <i className="ri-heart-3-line " />
                        <i className="ri-star-s-fill fs-5" />
                        <i className="ri-shopping-bag-line" />
                      </div>
                    </div>
                  </div>
                  
                </div>
              </nav>
              <div></div>
            </div>
          </div>
        </section>
      </>


    </div>
  )
}
