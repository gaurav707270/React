import React from 'react'

export default function ShopGride() {
  return (
    <div>
      <>
        {/* hero section */}
        <section className="container-fluid mt-5  ">
          <div className=" container d-flex flex-wrap  row-cols-1 row-cols-lg-2 align-items-center border border-black rounded bg-white">
            <div className="col p-3">
              <h1 className="display-2">
                Shop Page
                <p className="m-0 fs-3 text-danger mt-3">
                  Ho'ne <i className="ri-arrow-right-long-line text-black" />{" "}
                  <span className="text-black">Shop</span>
                </p>
                <br />
              </h1>
            </div>
            <div className="col">
              <div className=" p-3 d-flex justify-content-center rounded">
                <img
                  className="rounded w-75"
                  src="https://html.pixelfit.agency/pesco/assets/images/bg/page-img-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* PAGE BANNER */}
        <section className="container-fluid  text-black text-center mt-5">
          <h1 className="fw-bold">
            <i className="ri-asterisk fs-5 text-danger" /> Shop Grid{" "}
            <i className="ri-asterisk fs-5 text-danger" />
          </h1>
        </section>
        {/* SHOP SECTION*/}
        <section className="container-fluid mt-5">
          <div className="container">
            <div className="row">
              {/*  FILTER SIDEBA */}
              <div className="col-lg-3 mb-4">
                <div className="shadow p-4 rounded">
                  <h4 className="mb-3">Filter By</h4>
                  {/* Category */}
                  <h6 className="fw-bold">Category</h6>
                  <ul className="list-unstyled">
                    <li>
                      <input type="checkbox" /> Shirts
                    </li>
                    <li>
                      <input type="checkbox" /> Jeans
                    </li>
                    <li>
                      <input type="checkbox" /> Dresses
                    </li>
                    <li>
                      <input type="checkbox" /> Jackets
                    </li>
                  </ul>
                  <hr />
                  {/* Price */}
                  <h6 className="fw-bold">Price</h6>
                  <input type="range" className="form-range" />
                  <p>$10 - $500</p>
                  <hr />
                  {/* Rating */}
                  <h6 className="fw-bold">Rating</h6>
                  <p>
                    <i className="ri-star-fill text-warning" />
                    <i className="ri-star-fill text-warning" />
                    <i className="ri-star-fill text-warning" />
                    <i className="ri-star-fill text-warning" />
                    <i className="ri-star-line" />
                  </p>
                  <button className="btn btn-dark w-100 mt-3">Apply Filter</button>
                </div>
              </div>
              {/*  PRODUCT GRID */}
              <div className="col-lg-9">
                <div className="row g-4">
                  {/* PRODUCT CARD 01 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="card shadow border-0 text-center">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-2.png"
                        className="card-img-top p-3"
                      />
                      <div className="card-body">
                        <h6>Cozy knit sweater</h6>
                        <div className="mb-2">
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-line" />
                        </div>
                        <p className="text-decoration-line-through text-muted">
                          $80.00
                        </p>
                        <h5 className="text-danger">$40.00</h5>
                        <button className="btn btn-dark w-100 mt-2">
                          <i className="ri-shopping-cart-line" /> Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* PRODUCT CARD 02 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="card shadow border-0 text-center">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-3.png"
                        className="card-img-top p-3"
                      />
                      <div className="card-body">
                        <h6>Summer Dress</h6>
                        <div className="mb-2">
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                        </div>
                        <p className="text-decoration-line-through text-muted">
                          $100.00
                        </p>
                        <h5 className="text-danger">$55.00</h5>
                        <button className="btn btn-dark w-100 mt-2">
                          <i className="ri-shopping-cart-line" /> Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* PRODUCT CARD 02 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="card shadow border-0 text-center">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-3.png"
                        className="card-img-top p-3"
                      />
                      <div className="card-body">
                        <h6>Summer Dress</h6>
                        <div className="mb-2">
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                        </div>
                        <p className="text-decoration-line-through text-muted">
                          $100.00
                        </p>
                        <h5 className="text-danger">$55.00</h5>
                        <button className="btn btn-dark w-100 mt-2">
                          <i className="ri-shopping-cart-line" /> Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* PRODUCT CARD 02 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="card shadow border-0 text-center">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-3.png"
                        className="card-img-top p-3"
                      />
                      <div className="card-body">
                        <h6>Summer Dress</h6>
                        <div className="mb-2">
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                        </div>
                        <p className="text-decoration-line-through text-muted">
                          $100.00
                        </p>
                        <h5 className="text-danger">$55.00</h5>
                        <button className="btn btn-dark w-100 mt-2">
                          <i className="ri-shopping-cart-line" /> Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* PRODUCT CARD 02 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="card shadow border-0 text-center">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-3.png"
                        className="card-img-top p-3"
                      />
                      <div className="card-body">
                        <h6>Summer Dress</h6>
                        <div className="mb-2">
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                        </div>
                        <p className="text-decoration-line-through text-muted">
                          $100.00
                        </p>
                        <h5 className="text-danger">$55.00</h5>
                        <button className="btn btn-dark w-100 mt-2">
                          <i className="ri-shopping-cart-line" /> Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* PRODUCT CARD 02 */}
                  <div className="col-md-6 col-lg-4">
                    <div className="card shadow border-0 text-center">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-3.png"
                        className="card-img-top p-3"
                      />
                      <div className="card-body">
                        <h6>Summer Dress</h6>
                        <div className="mb-2">
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                          <i className="ri-star-fill text-warning" />
                        </div>
                        <p className="text-decoration-line-through text-muted">
                          $100.00
                        </p>
                        <h5 className="text-danger">$55.00</h5>
                        <button className="btn btn-dark w-100 mt-2">
                          <i className="ri-shopping-cart-line" /> Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Add More Products Same Style */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PAGINATION */}
        <section className="container mt-5 mb-5 text-center">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link text-dark" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-dark" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link text-dark" href="#">
                  3
                </a>
              </li>
            </ul>
          </nav>
        </section>
        {/* Get weekly update section */}
        <section className="container-fluid">
          <div className="container banner_color01 p-3 rounded-5 border border-black shadow d-flex flex-wrap row-cols-sm-1 row-cols-md-2">
            <div className="col p-2">
              <h3>Our Newsletter</h3>
              <h1 className="p-3">
                Get weekly update. Sign up and get up to{" "}
                <span className="text-danger">20% off</span> your first purchase
              </h1>
              <div className="input-group mb-3  ">
                <input
                  type="text"
                  className="form-control p-3  mt-2    "
                  placeholder="Write Your Email  Address"
                  aria-label="Recipient’s username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary mt-2"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-end ">
              <img
                className="col-12"
                src="https://html.pixelfit.agency/pesco/assets/images/newsletter/newsletter-1.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </>

    </div>
  )
}
