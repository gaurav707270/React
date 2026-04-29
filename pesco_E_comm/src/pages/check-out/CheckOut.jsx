import React from 'react'

export default function CheckOut() {
    return (
        <div>
            <>
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
                {/* ================= CHECKOUT SECTION ================= */}
                <section className="container mt-5 mb-5">
                    <h2 className="fw-bold w-100 text-center p-3">Checkout</h2>
                    <div className="row">
                        {/* Billing Details */}
                        <div className="col-lg-7 shadow p-4 rounded bg-white">
                            <h4 className="mb-4">Billing Details</h4>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Address</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label>City</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label>Zip Code</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label>Order Notes</label>
                                    <textarea className="form-control" rows={3} defaultValue={""} />
                                </div>
                            </form>
                        </div>
                        {/* Order Summary */}
                        <div className="col-lg-5 mt-4 mt-lg-0">
                            <div className="shadow p-4 rounded bg-white">
                                <h4 className="mb-4">Your Order</h4>
                                <div className="d-flex justify-content-between">
                                    <p>Product 1</p>
                                    <p>$40.00</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Product 2</p>
                                    <p>$23.00</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <strong>Subtotal</strong>
                                    <strong>$63.00</strong>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Shipping</p>
                                    <p>Free</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <h5>Total</h5>
                                    <h5 className="text-danger">$63.00</h5>
                                </div>
                                <hr />
                                {/* Payment Method */}
                                <h5>Payment Method</h5>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="payment"
                                        defaultChecked=""
                                    />
                                    <label className="form-check-label">Cash on Delivery</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="payment" />
                                    <label className="form-check-label">Credit Card</label>
                                </div>
                                <div className="form-check mb-4">
                                    <input className="form-check-input" type="radio" name="payment" />
                                    <label className="form-check-label">UPI Payment</label>
                                </div>
                                <button className="btn btn-dark w-100 p-3 rounded-3">
                                    Place Order
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
