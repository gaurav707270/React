import React, { useState, useEffect } from 'react'

export default function Card() {

    const [cart, setCart] = useState([]);


    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [
            {
                id: 1,
                name: "Summer Dress",
                price: 40,
                qty: 1,
                img: "https://html.pixelfit.agency/pesco/assets/images/products/trending-product-2.png"
            },
            {
                id: 2,
                name: "Cargo Shorts",
                price: 20,
                qty: 2,
                img: "https://html.pixelfit.agency/pesco/assets/images/products/trending-product-3.png"
            }
        ];
        setCart(savedCart);
    }, []);

    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const handleQty = (id, value) => {
        const updated = cart.map(item =>
            item.id === id ? { ...item, qty: Number(value) } : item
        );
        setCart(updated);
    };

    const handleDelete = (id) => {
        const updated = cart.filter(item => item.id !== id);
        setCart(updated);
    };


    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const shipping = 10;
    const total = subtotal + shipping;

    return (
        <div>

            {/* Cart Section */}
            <section className="container mt-5">
                <div className="row">

                    {/* Cart Items */}
                    <div className="col-lg-8">

                        {cart.map(item => (
                            <div className="card mb-4 shadow" key={item.id}>
                                <div className="row g-0 align-items-center p-3">

                                    <div className="col-md-3">
                                        <img src={item.img} className="img-fluid rounded" />
                                    </div>

                                    <div className="col-md-4">
                                        <h5>{item.name}</h5>
                                        <p className="text-muted">${item.price}</p>
                                    </div>

                                    <div className="col-md-3">
                                        <input
                                            type="number"
                                            value={item.qty}
                                            className="form-control"
                                            min="1"
                                            onChange={(e) => handleQty(item.id, e.target.value)}
                                        />
                                    </div>

                                    <div className="col-md-2 text-end">
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            <i className="ri-delete-bin-line" />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Cart Summary */}
                    <div className="col-lg-4">
                        <div className="card shadow p-4">

                            <h4>Cart Summary</h4>
                            <hr />

                            <div className="d-flex justify-content-between">
                                <p>Subtotal</p>
                                <p>${subtotal}</p>
                            </div>

                            <div className="d-flex justify-content-between">
                                <p>Shipping</p>
                                <p>${shipping}</p>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between fs-5">
                                <strong>Total</strong>
                                <strong>${total}</strong>
                            </div>

                            <button className="btn btn-dark w-100 mt-3">
                                Proceed to Checkout
                            </button>

                        </div>
                    </div>

                </div>
            </section>

            {/* Newsletter */}
            <section className="container-fluid">
                <div className="container banner_color01 p-3 rounded-5 border border-black shadow d-flex flex-wrap">

                    <div className="col p-2">
                        <h3>Our Newsletter</h3>
                        <h1 className="p-3">
                            Get weekly update. Sign up and get up to{" "}
                            <span className="text-danger">20% off</span>
                        </h1>

                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control p-3 mt-2"
                                placeholder="Write Your Email Address"
                            />
                            <button
                                className="btn btn-outline-secondary mt-2"
                                onClick={() => alert("Subscribed 🎉")}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-end">
                        <img
                            className="col-12"
                            src="https://html.pixelfit.agency/pesco/assets/images/newsletter/newsletter-1.png"
                            alt=""
                        />
                    </div>

                </div>
            </section>

        </div>
    )
}