import React from 'react'

export default function Card() {
    return (
        <div>
            <>
                {/* Cart Section */}
                <section className="container mt-5">
                    <div className="row">
                        {/* Cart Items */}
                        <div className="col-lg-8">
                            <div className="card mb-4 shadow">
                                <div className="row g-0 align-items-center p-3">
                                    <div className="col-md-3">
                                        <img
                                            src="https://html.pixelfit.agency/pesco/assets/images/products/trending-product-2.png"
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <h5>Summer Dress</h5>
                                        <p className="text-muted">$40.00</p>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="number" defaultValue={1} className="form-control" />
                                    </div>
                                    <div className="col-md-2 text-end">
                                        <button className="btn btn-danger">
                                            <i className="ri-delete-bin-line" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 shadow">
                                <div className="row g-0 align-items-center p-3">
                                    <div className="col-md-3">
                                        <img
                                            src="https://html.pixelfit.agency/pesco/assets/images/products/trending-product-3.png"
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <h5>Cargo Shorts</h5>
                                        <p className="text-muted">$20.00</p>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="number" defaultValue={2} className="form-control" />
                                    </div>
                                    <div className="col-md-2 text-end">
                                        <button className="btn btn-danger">
                                            <i className="ri-delete-bin-line" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Cart Summary */}
                        <div className="col-lg-4">
                            <div className="card shadow p-4">
                                <h4>Cart Summary</h4>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <p>Subtotal</p>
                                    <p>$80.00</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Shipping</p>
                                    <p>$10.00</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between fs-5">
                                    <strong>Total</strong>
                                    <strong>$90.00</strong>
                                </div>
                                <button className="btn btn-dark w-100 mt-3">
                                    Proceed to Checkout
                                </button>
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
