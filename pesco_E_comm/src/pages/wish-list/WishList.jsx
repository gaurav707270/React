import React from 'react'

export default function WishList() {
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
                {/* ================= WISHLIST SECTION ================= */}
                <section className="container mt-5 mb-5">
                    <h2 className="fw-bold w-100 text-center p-3">My Wishlist</h2>
                    <div className="table-responsive shadow rounded bg-white p-3">
                        <table className="table align-middle text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Stock Status</th>
                                    <th>Add to Cart</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Product 1 */}
                                <tr>
                                    <td>
                                        <img
                                            width={80}
                                            src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-2.png"
                                            className="rounded"
                                        />
                                    </td>
                                    <td>Cozy Knit Sweater</td>
                                    <td>$23.00</td>
                                    <td>
                                        <span className="badge bg-success">In Stock</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-dark btn-sm">
                                            <i className="ri-shopping-cart-line" /> Add
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <i className="ri-delete-bin-line" />
                                        </button>
                                    </td>
                                </tr>
                                {/* Product 2 */}
                                <tr>
                                    <td>
                                        <img
                                            width={80}
                                            src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-3.png"
                                            className="rounded"
                                        />
                                    </td>
                                    <td>Athletic Leggings</td>
                                    <td>$40.00</td>
                                    <td>
                                        <span className="badge bg-success">In Stock</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-dark btn-sm">
                                            <i className="ri-shopping-cart-line" /> Add
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <i className="ri-delete-bin-line" />
                                        </button>
                                    </td>
                                </tr>
                                {/* Product 3 */}
                                <tr>
                                    <td>
                                        <img
                                            width={80}
                                            src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-4.png"
                                            className="rounded"
                                        />
                                    </td>
                                    <td>Leather Biker Jacket</td>
                                    <td>$67.00</td>
                                    <td>
                                        <span className="badge bg-danger">Out of Stock</span>
                                    </td>
                                    <td>
                                        <button className="btn btn-secondary btn-sm" disabled="">
                                            Out of Stock
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-sm">
                                            <i className="ri-delete-bin-line" />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Continue Shopping Button */}
                    <div className="text-end mt-4">
                        <a href="Shop-Grid.html" className="btn btn-outline-dark px-4">
                            <i className="ri-arrow-left-line" /> Continue Shopping
                        </a>
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
