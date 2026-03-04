import React from 'react';

export const Contact = () => {
    return (
        <section className="contact-section py-3 bg-black text-light">
            <div className="container">

                <div className="row mb-4 text-center">
                    <div className="col">
                        <h2 className="fw-bold text-primary">Contact Us</h2>
                        <p className="text-secondary">
                            We would love to hear from you!
                        </p>
                    </div>
                </div>

                <div className="row g-4">

                    {/* Contact Info */}
                    <div className="col-md-5">
                        <div className="bg-black border border-secondary p-4 rounded h-100">
                            <h5 className="fw-bold mb-3 text-white">Get in Touch</h5>
                            <p className="mb-2">
                                <strong>Email:</strong> sachinkharate2004.com
                            </p>
                            <p className="mb-2">
                                <strong>Phone:</strong> +91 930 996 8779
                            </p>
                            <p className="mb-2">
                                <strong>Address:</strong> Surat , GUjrat
                            </p>
                            <p className="mb-0">
                                <strong>Hours:</strong> Mon - Fri, 9AM - 6PM
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="col-md-7">
                        <div className="bg-black border border-secondary p-4 rounded">
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-light">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control bg-dark text-light border-secondary"
                                            placeholder="Enter first name"
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label text-light">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control bg-dark text-light border-secondary"
                                            placeholder="Enter last name"
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-light">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control bg-dark text-light border-secondary"
                                        placeholder="Enter email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-light">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control bg-dark text-light border-secondary"
                                        placeholder="Enter subject"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label text-light">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control bg-dark text-light border-secondary"
                                        rows="4"
                                        placeholder="Enter your message"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-outline-light w-100"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                < hr className=' container border border-3 border-primary ' />
            </div>
        </section>
    );
};