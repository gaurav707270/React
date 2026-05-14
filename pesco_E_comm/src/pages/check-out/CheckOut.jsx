import React, { useState, useEffect } from 'react'

export default function CheckOut() {

    const [cart, setCart] = useState([]);
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zip: ""
    });

    // 🔹 Load cart
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    // 🔹 Handle form
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 🔹 Calculate total
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    // 🔹 Place order
    const handleOrder = () => {

        if (!form.firstName || !form.email || !form.phone || !form.address) {
            alert("Please fill all required fields");
            return;
        }

        const order = {
            user: form,
            items: cart,
            total: total
        };

        localStorage.setItem("order", JSON.stringify(order));
        localStorage.removeItem("cart");

        alert("Order Placed Successfully 🎉");

        setCart([]);
    };

    return (
        <div>

            {/* ================= CHECKOUT SECTION ================= */}
            <section className="container mt-5 mb-5">
                <h2 className="fw-bold text-center p-3">Checkout</h2>

                <div className="row">

                    {/* Billing */}
                    <div className="col-lg-7 shadow p-4 rounded bg-white">

                        <h4>Billing Details</h4>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input name="firstName" onChange={handleChange} className="form-control" placeholder="First Name" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input name="lastName" onChange={handleChange} className="form-control" placeholder="Last Name" />
                            </div>
                        </div>

                        <input name="email" onChange={handleChange} className="form-control mb-3" placeholder="Email" />
                        <input name="phone" onChange={handleChange} className="form-control mb-3" placeholder="Phone" />
                        <input name="address" onChange={handleChange} className="form-control mb-3" placeholder="Address" />

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input name="city" onChange={handleChange} className="form-control" placeholder="City" />
                            </div>
                            <div className="col-md-6 mb-3">
                                <input name="zip" onChange={handleChange} className="form-control" placeholder="Zip Code" />
                            </div>
                        </div>

                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-5 mt-4 mt-lg-0">

                        <div className="shadow p-4 rounded bg-white">

                            <h4>Your Order</h4>

                            {cart.map(item => (
                                <div key={item.id} className="d-flex justify-content-between">
                                    <p>{item.name} x {item.qty}</p>
                                    <p>${item.price * item.qty}</p>
                                </div>
                            ))}

                            <hr />

                            <div className="d-flex justify-content-between">
                                <strong>Subtotal</strong>
                                <strong>${subtotal}</strong>
                            </div>

                            <div className="d-flex justify-content-between">
                                <p>Shipping</p>
                                <p>Free</p>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between">
                                <h5>Total</h5>
                                <h5 className="text-danger">${total}</h5>
                            </div>

                            <button
                                className="btn btn-dark w-100 mt-3"
                                onClick={handleOrder}
                            >
                                Place Order
                            </button>

                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}