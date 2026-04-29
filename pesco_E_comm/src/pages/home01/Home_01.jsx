import React from 'react'

export default function Home_01() {
  return (
    <div>
      <>
        <section className="container-fluid  ">
          <div className=" container d-flex flex-wrap  row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col p-3">
              <p className="m-0 fs-3 text-danger">Best for your categories</p>
              <h1 className=" float">
                Exclusive Collection
                <br />
                in
                <span className="light-orange rounded-5 p-1 shadow">Our Online</span>
                store
              </h1>
              <p className="fs-4">
                Discover our exclusive collection available only in our online store.
                Shop now for unique and premium items that you won't find anywhere
                else.
              </p>
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <div className="fs-1 m-2">
                    <i className="ri-money-dollar-circle-line" />
                  </div>
                  <div>
                    <p className="m-0">Discount Price</p>
                    <h3>140.00</h3>
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-center align-items-center">
                  <button className="m-0 p-0 rounded-5 w-50 h-50 bg-dark text-light shadow">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className=" p-3 d-flex justify-content-center rounded  ">
                <img
                  className="rounded w-75"
                  src="https://html.pixelfit.agency/pesco/assets/images/hero/hero-one_img1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* auto scroll bar section */}
        <div className="banner-slider w-100  bg-black align-items-center   p-2  ">
          <marquee direction="left" scrollamount={8} loop={-1}>
            <span className="text-white fs-3 m-5">Welcome to My Website</span>
            <i className="ri-shield-star-line text-danger fs-3 m-5" />
            <span className="text-white fs-3 m-5">Women</span>
            <i className="ri-shield-star-line text-danger fs-3 m-5">
              <span className="text-white fs-3 m-5">Shirts</span>
              <i className="ri-shield-star-line text-danger fs-3 m-5">
                <span className="text-white fs-3 m-5">Jeans</span>
                <i className="ri-shield-star-line text-danger fs-3 m-5">
                  <span className="text-white fs-3 m-5">Man</span>
                  <i className="ri-shield-star-line text-danger fs-3 m-5">
                    <span className="text-white fs-3 m-5">Jackets</span>
                    <i className="ri-shield-star-line text-danger fs-3 m-5">
                      <span className="text-white fs-3 m-5">Blazer</span>
                    </i>
                  </i>
                </i>
              </i>
            </i>
          </marquee>
        </div>
        {/* Category Section */}
        <section className="container-fluid p-3">
          <div className="container rounded-5 p-5 bg-white shadow w-100 d-flex justify-content-evenly flex-wrap  align-items-center row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
            <div>
              <div className=" border border-white p-2 m-2  ">
                <i className="ri-truck-line fs-3 border border-white" />
              </div>
              <div>
                <h3>Free Shipping</h3>
                <p className="p-2">
                  You get your items delivered without any extra cost.
                </p>
              </div>
            </div>
            <div>
              <div className=" border border-white p-2 m-2">
                <i className="ri-mic-line fs-3 border border-white  " />
              </div>
              <div>
                <h3>Great Support 24/7</h3>
                <p className="p-2">
                  Our customer support team is available around the clock.
                </p>
              </div>
            </div>
            <div>
              <div className=" border border-white p-2 m-2">
                <i className="ri-shake-hands-line fs-3 border border-white" />
              </div>
              <div>
                <h3>Return Available</h3>
                <p className="p-2">
                  Making it easy to return any items if you're not satisfied.
                </p>
              </div>
            </div>
            <div>
              <div className=" border border-white p-2 m-2">
                <i className="ri-secure-payment-line fs-3 border border-white" />
              </div>
              <div>
                <h3>Secure Payment</h3>
                <p className="p-2">
                  Shop with confidence knowing that our secure payment .
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Top Category section */}
        <section className="container-fluid mt-2 p-3">
          <div className="container ">
            <p>
              <i className="ri-meteor-line text-danger m-0 shadow" />{" "}
              <span> Category</span>
            </p>
            <h2>Browse Top Category</h2>
            <div id="carouselExample" className="carousel slide ">
              <div className="w-100  d-flex justify-content-end  ">
                <button
                  className=" m-2 bg-black rounded-circle"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="m-2 bg-black rounded-circle"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="carousel-inner d-flex ">
                <div className="carousel-item active ">
                  <div className="  row  mt-3 ">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12  glass-card  mt-2">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/category/category-3.png"
                        className="d-block w-100 "
                        alt="..."
                      />
                    </div>
                    <div className=" col-lg-3 col-md-4 col-sm-6 col-12 glass-card mt-2">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/category/category-4.png"
                        className="d-block w-100 "
                        alt="..."
                      />
                    </div>
                    <div className=" col-lg-3 col-md-4 col-sm-6 col-12 glass-card mt-2">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/category/category-5.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className=" col-lg-3 col-md-4 col-sm-6 col-12 glass-card mt-2">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/category/category-6.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row mt-3">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 glass-card">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/category/category-1.png"
                        className="d-block w-100 "
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 glass-card">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/category/category-2.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 glass-card">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/category/category-5.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12 glass-card">
                      <img
                        src="https://html.pixelfit.agency/pesco/assets/images/category/category-6.png"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* offer section */}
        <section classs="container-fluid">
          <div className="container   p-3 d-flex flex-wrap row-cols-sm-1 row-cols-md-1 row-cols-lg-2  ">
            <div>
              <div className=" col border border-black p-3 m-2 shadow rounded ">
                <div className="row justify-content-center row-cols-1 row-cols-sm-2 ">
                  <div>
                    <p className=" m-0 fs-3"> UP TO</p>
                    <h1 className=" fs-1">50% OFF</h1>
                    <p className="fs-4 w-100">
                      Exclusive Kids &amp; Adults Summer Outfits
                    </p>
                    <button type="button" className="btn btn-secondary p-2 w-50">
                      Shop Now
                    </button>
                  </div>
                  <div className="w-50 h-100 d-flex justify-content-center ">
                    <img
                      width="190px"
                      src="https://html.pixelfit.agency/pesco/assets/images/banner/banner-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="  col  border border-black p-3 m-2 shadow rounded ">
                <div className="row justify-content-center row-cols-1 row-cols-sm-2">
                  <div>
                    <p className=" m-0 fs-3"> UP TO</p>
                    <h1 className=" fs-1">70% OFF</h1>
                    <p className="fs-4 w-100">
                      Exclusive Kids &amp; Adults Summer Outfits
                    </p>
                    <button type="button" className="btn btn-secondary p-2 w-50">
                      Shop Now
                    </button>
                  </div>
                  <div className="w-50 h-100 d-flex justify-content-center">
                    <img
                      width="190px"
                      height="190px"
                      src="https://html.pixelfit.agency/pesco/assets/images/banner/banner-2.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Features Collection section */}
        <section className="container-fluid mt-3">
          <div className="w-100 ">
            <p>
              <i className="ri-meteor-line text-danger m-0 shadow" />{" "}
              <span>Feature Products</span>
            </p>
            <div>
              <h2>Our Features Collection</h2>
              <div className="d-flex w-100 justify-content-evenly align-items-center p1=-1 bg-white shadow rounded flex-wrap row-cols-1 row-cols-sm-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4">
                <div className=" cart  m-2 rounded col  text-center ">
                  <div>
                    <img
                      className="cart_image w-75 rounded cart_hover"
                      src="https://html.pixelfit.agency/pesco/assets/images/hero/hero-one_img1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="d-flex">
                    <div className="m-2 ">
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <span>(80)</span>
                      <p>Lightweight linen summer dress with belt</p>
                    </div>
                    <div className=" h-100 m-2">
                      <p className="text-decoration-line-through m-0 ">$80.00</p>
                      <p className="fs-5 ">$40.00</p>
                    </div>
                  </div>
                </div>
                <div className=" cart  m-2 rounded col text-center">
                  <img
                    className="cart_image rounded w-75 cart_hover"
                    src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-2.png"
                    alt=""
                  />
                  <div className="d-flex">
                    <div className="m-2 ">
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <span>(80)</span>
                      <p>Cozy knit sweater with pockets</p>
                    </div>
                    <div className=" h-100 m-2">
                      <p className="text-decoration-line-through m-0 ">$67.00</p>
                      <p className="fs-5">$23.00</p>
                    </div>
                  </div>
                </div>
                <div className=" cart  m-2 rounded col  text-center">
                  <img
                    className="cart_image rounded w-75 cart_hover"
                    src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-3.png"
                    alt=""
                  />
                  <div className="d-flex">
                    <div className="m-2 ">
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <span>(80)</span>
                      <p>Athletic leggings with mesh panels</p>
                    </div>
                    <div className=" h-100 m-2">
                      <p className="text-decoration-line-through m-0 ">$80.00</p>
                      <p className="fs-5">$40.00</p>
                    </div>
                  </div>
                </div>
                <div className=" cart  m-2 rounded col  text-center">
                  <img
                    className="cart_image rounded w-75 cart_hover"
                    src="	https://html.pixelfit.agency/pesco/assets/images/products/feature-product-4.png"
                    alt=""
                  />
                  <div className="d-flex">
                    <div className="m-2 ">
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <span>(80)</span>
                      <p>Classic leather biker jacket with zippers</p>
                    </div>
                    <div className=" h-100 m-2">
                      <p className="text-decoration-line-through m-0 ">$67.00</p>
                      <p className="fs-5">$23.00</p>
                    </div>
                  </div>
                </div>
                <div className=" cart  m-2 rounded col  text-center">
                  <img
                    className="cart_image rounded w-75 cart_hover"
                    src="https://html.pixelfit.agency/pesco/assets/images/hero/hero-one_img1.jpg"
                    alt=""
                  />
                  <div className="d-flex">
                    <div className="m-2 ">
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <span>(80)</span>
                      <p>Elegant silk dress with sequins</p>
                    </div>
                    <div className=" h-100 m-2">
                      <p className="text-decoration-line-through m-0 ">$80.00</p>
                      <p className="fs-5">$40.00</p>
                    </div>
                  </div>
                </div>
                <div className=" cart  m-2 rounded col  text-center object-fit-contain">
                  <img
                    className="cart_image rounded w-75 cart_hover"
                    src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-2.png"
                    alt=""
                  />
                  <div className="d-flex">
                    <div className="m-2 ">
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <i className="ri-star-fill text-warning" />
                      <span>(80)</span>
                      <p>Cargo shorts with pockets and drawstring</p>
                    </div>
                    <div className=" h-100 m-2">
                      <p className="text-decoration-line-through m-0 ">$80.00</p>
                      <p className="fs-5">$40.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Work Processing section */}
        <section className="container-fluid mt-3">
          <div className="w-100 shadow p-3 ">
            <div className="d-flex justify-content-center ">
              <div className="text-center ">
                <p className="m-0 text-danger   ">
                  <i className="ri-asterisk" /> Work Processing{" "}
                  <i className="ri-asterisk" />
                </p>
                <h1>How it Work processing</h1>
              </div>
            </div>
            <div className="container d-flex justify-content-center flex-wrap row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 ">
              <div className="work_cart  shadow px-4 ">
                <div calss=" ">
                  <i className="ri-search-ai-3-line fs-1 rounded-circle" />
                </div>
                <div>
                  <h4>Browsing &amp; Choosing</h4>
                  <p>
                    This is where customers visit your online store, browse your
                    products.
                  </p>
                </div>
              </div>
              <div className="work_cart  shadow px-4">
                <div className=" ">
                  <i className="ri-hand-coin-line fs-1" />
                </div>
                <div>
                  <h4>Checkout &amp; Payment</h4>
                  <p>
                    Once they have picked their items, customers proceed to checkout.
                  </p>
                </div>
              </div>
              <div className="work_cart  shadow px-4">
                <div className=" ">
                  <i className="ri-shape-fill fs-1" />
                </div>
                <div>
                  <h4>Order Fulfillment</h4>
                  <p>
                    After the order is placed, it's sent to your fulfillment team.
                  </p>
                </div>
              </div>
              <div className="work_cart shadow px-4">
                <div className="">
                  <i className="ri-e-bike-2-fill fs-1" />
                </div>
                <div>
                  <h4>Delivery to Customer</h4>
                  <p>The packed order is then sent off with a shipping carrier</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* What's Trending Now section */}
        <section className="container-fluid mt-2 p-3">
          <div className="container ">
            <p>
              <i className="ri-meteor-line text-danger m-0 shadow" />{" "}
              <span>Trending Products</span>
            </p>
            <h2>What's Trending Now</h2>
            <div id="carouselExample" className="carousel slide ">
              <div className="w-100  d-flex justify-content-end  ">
                <button
                  className=" m-2 bg-black rounded-circle"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="m-2 bg-black rounded-circle"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="carousel-inner d-flex ">
                <div className="carousel-item active ">
                  <div className="  row   ">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12  ">
                      {/* <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                              <img src="https://html.pixelfit.agency/pesco/assets/images/category/category-1.png"
                                  class="d-block w-100 " alt="...">
                          </div> */}
                      <div className=" w-100">
                        <img
                          className="cart_image rounded w-100 cart_hover"
                          src="	https://html.pixelfit.agency/pesco/assets/images/products/trending-product-2.png"
                          alt=""
                        />
                        <div className="d-flex">
                          <div className="m-2 ">
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <span>(80)</span>
                            <p>Lightweight linen summer dress with belt</p>
                          </div>
                          <div className=" h-100 m-2">
                            <p className="text-decoration-line-through m-0 ">
                              $80.00
                            </p>
                            <p className="fs-5 ">$40.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-3 col-md-4 col-sm-6 col-12">
                      <div className=" w-100">
                        <img
                          className="cart_image rounded w-100 cart_hover"
                          src="https://html.pixelfit.agency/pesco/assets/images/products/trending-product-3.png"
                          alt=""
                        />
                        <div className="d-flex">
                          <div className="m-2 ">
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <span>(80)</span>
                            <p>Cargo shorts with pockets &amp; sundress drawstring</p>
                          </div>
                          <div className=" h-100 m-2">
                            <p className="text-decoration-line-through m-0 ">
                              $67.00
                            </p>
                            <p className="fs-5 ">$20.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-lg-3 col-md-4 col-sm-6 col-12">
                      <div className="  w-100">
                        <img
                          className="cart_image rounded w-100 cart_hover"
                          src="https://html.pixelfit.agency/pesco/assets/images/products/trending-product-4.png"
                          alt=""
                        />
                        <div className="d-flex">
                          <div className="m-2 ">
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <span>(80)</span>
                            <p>Cargo shorts with pockets &amp; sundress drawstring</p>
                          </div>
                          <div className=" h-100 m-2">
                            <p className="text-decoration-line-through m-0 ">
                              $80.00
                            </p>
                            <p className="fs-5 ">$40.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="  col-lg-3 col-md-4 col-sm-6 col-12">
                      <div className=" w-100">
                        <img
                          className="cart_image rounded w-100 cart_hover"
                          src="https://html.pixelfit.agency/pesco/assets/images/products/trending-product-5.png"
                          alt=""
                        />
                        <div className="d-flex">
                          <div className="m-2 ">
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <span>(80)</span>
                            <p>Lightweight linen summer dress with belt</p>
                          </div>
                          <div className=" h-100 m-2">
                            <p className="text-decoration-line-through m-0 ">
                              $80.00
                            </p>
                            <p className="fs-5 ">$40.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    <div className="m-1 col-2">
                      <div className="  w-100">
                        <img
                          className="cart_image rounded  w-100"
                          src="https://html.pixelfit.agency/pesco/assets/images/products/trending-product-4.png"
                          alt=""
                        />
                        <div className="d-flex">
                          <div className="m-2 ">
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <span>(80)</span>
                            <p>Lightweight linen summer dress with belt</p>
                          </div>
                          <div className=" h-100 m-2">
                            <p className="text-decoration-line-through m-0 ">
                              $80.00
                            </p>
                            <p className="fs-5 ">$40.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="m-1 col-2">
                      <div className="  w-100">
                        <img
                          className="cart_image rounded  w-100"
                          src="https://html.pixelfit.agency/pesco/assets/images/hero/hero-one_img1.jpg"
                          alt=""
                        />
                        <div className="d-flex">
                          <div className="m-2 ">
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <i className="ri-star-fill text-warning" />
                            <span>(80)</span>
                            <p>Lightweight linen summer dress with belt</p>
                          </div>
                          <div className=" h-100 m-2">
                            <p className="text-decoration-line-through m-0 ">
                              $80.00
                            </p>
                            <p className="fs-5 ">$40.00</p>
                          </div>
                        </div>
                      </div>
                      <div className="m-1 col-2">
                        <div className="  w-100">
                          <img
                            className="cart_image rounded  w-100"
                            src="https://html.pixelfit.agency/pesco/assets/images/hero/hero-one_img1.jpg"
                            alt=""
                          />
                          <div className="d-flex">
                            <div className="m-2 ">
                              <i className="ri-star-fill text-warning" />
                              <i className="ri-star-fill text-warning" />
                              <i className="ri-star-fill text-warning" />
                              <i className="ri-star-fill text-warning" />
                              <i className="ri-star-fill text-warning" />
                              <span>(80)</span>
                              <p>Lightweight linen summer dress with belt</p>
                            </div>
                            <div className=" h-100 m-2">
                              <p className="text-decoration-line-through m-0 ">
                                $80.00
                              </p>
                              <p className="fs-5 ">$40.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="m-1 col-2">
                        <div className="  w-100">
                          <img
                            className="cart_image rounded  w-100"
                            src="https://html.pixelfit.agency/pesco/assets/images/hero/hero-one_img1.jpg"
                            alt=""
                          />
                          <div className="d-flex">
                            <div className="m-2 ">
                              <i className="ri-star-fill text-warning" />
                              <i className="ri-star-fill text-warning" />
                              <i className="ri-star-fill text-warning" />
                              <i className="ri-star-fill text-warning" />
                              <i className="ri-star-fill text-warning" />
                              <span>(80)</span>
                              <p>Lightweight linen summer dress with belt</p>
                            </div>
                            <div className=" h-100 m-2">
                              <p className="text-decoration-line-through m-0 ">
                                $80.00
                              </p>
                              <p className="fs-5 ">$40.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Deal of the Week section */}
        <section className="container-fluid">
          <div className=" container-fluid banner_color d-flex rounded-5 border border-black shadow flex-wrap row-cols-1 row-cols-xs-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2">
            <div className="p-2 col ">
              <div className="d-flex">
                <i className="ri-price-tag-3-line fs-3" />
                <p className="fs-3">Deal of the Week</p>
              </div>
              <div className="ms-2">
                <h1>Hurry Up! Offer ends in. Get</h1>
                <p className="text-danger fs-3">UP TO 80% OFF</p>
              </div>
              <div className="p-2 col d-flex m-0 d-none d-lg-block  justify-content-center">
                <div className="border border-black rounded p-1 w-50  text-center m-2">
                  <p className="m-0 ">0</p>
                  <p className="m-0 fs-4">day</p>
                </div>
                <div className="border border-black rounded p-1 w-50  text-center m-2">
                  <p className="m-0 ">0</p>
                  <p className="m-0 fs-4">hour</p>
                </div>
                <div className="border border-black rounded p-1 w-50  text-center m-2">
                  <p className="m-0 ">0</p>
                  <p className="m-0 fs-4 ">minute</p>
                </div>
                <div className="border border-black rounded p-1 w-50  text-center m-2">
                  <p className="m-0 ">0</p>
                  <p className="m-0 fs-4">second</p>
                </div>
              </div>
              <div className="">
                <button type="button" className="btn btn-secondary w-50 p-3">
                  Shop New
                </button>
              </div>
            </div>
            <div className="col ">
              <img
                width="100%"
                height="100%"
                src="https://html.pixelfit.agency/pesco/assets/images/banner/deal-1.png"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* Explore our Articles section */}
        <section className="container-fluid mt-5">
          <div>
            <div className="text-center">
              <p className="m-0 text-danger   ">
                <i className="ri-asterisk" /> Our Blogs <i className="ri-asterisk" />
              </p>
              <h1>Explore our Articles</h1>
            </div>
          </div>
          <div className="container d-flex  flex-wrap row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 ">
            <div>
              <div className="d-flex align-items-center col p-3 ">
                <div className="col-12 ">
                  <div className="w-100 ">
                    <img
                      className="rounded col-12"
                      src="https://html.pixelfit.agency/pesco/assets/images/blog/blog-big-1.png"
                      alt=""
                    />
                  </div>
                  <div className="col-12">
                    <h1>
                      From Clicks to Closets: Mastering the Art of Fashion E-commerce
                      Marketing
                    </h1>
                    <p>
                      dives into the world of fashion e-commerce marketing, guiding
                      readers on how to turn online interest into sales. It likely
                      explores strategies to attract potential customers, showcase
                      products effectively, and create a smooth buying journey that
                      converts clicks into clothes hanging in closets
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-flex flex-wrap  ">
              <div className="d-flex flex-wrap  ">
                <div className="w-50 p-3 ">
                  <div>
                    <img
                      className="w-100 rounded"
                      src="https://html.pixelfit.agency/pesco/assets/images/blog/blog-sm-1.png"
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <p className="fs-5 m-0">
                      Slay the Summer Style Game Must-Have Trends You Can Shop Online
                    </p>
                    <p className="d-flex">
                      <span className="text-danger">WordPress</span>{" "}
                      <i className="ri-asterisk" />
                      12,2024
                    </p>
                  </div>
                </div>
                <div className="w-50 p-3">
                  <div>
                    <img
                      className="w-100 rounded"
                      src="https://html.pixelfit.agency/pesco/assets/images/blog/blog-sm-2.png"
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <p className="fs-5 m-0">
                      Slay the Summer Style Game Must-Have Trends You Can Shop Online
                    </p>
                    <p className="d-flex">
                      <span className="text-danger">WordPress</span>{" "}
                      <i className="ri-asterisk" />
                      12,2024
                    </p>
                  </div>
                </div>
                <div className="w-50 p-3 ">
                  <div>
                    <img
                      className="w-100 rounded"
                      src="https://html.pixelfit.agency/pesco/assets/images/blog/blog-sm-3.png"
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <p className="fs-5 m-0">
                      Slay the Summer Style Game Must-Have Trends You Can Shop Online
                    </p>
                    <p className="d-flex">
                      <span className="text-danger">WordPress</span>{" "}
                      <i className="ri-asterisk" />
                      12,2024
                    </p>
                  </div>
                </div>
                <div className="w-50 p-3 ">
                  <div>
                    <img
                      className="w-100 rounded"
                      src="https://html.pixelfit.agency/pesco/assets/images/blog/blog-sm-4.png"
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <p className="fs-5 m-0">
                      Slay the Summer Style Game Must-Have Trends You Can Shop Online
                    </p>
                    <p className="d-flex">
                      <span className="text-danger">WordPress</span>{" "}
                      <i className="ri-asterisk" />
                      12,2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
