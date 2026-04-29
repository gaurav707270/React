import React from 'react'

export default function Contact() {
  return (
    <div>
      <>
        <section className="container-fluid mt-5">
          <div className="container d-flex flex-wrap row-cols-1 row-cols-lg-2 align-items-center border rounded bg-white">
            <div className="col p-4">
              <h1 className="display-4 fw-bold">
                Contact Us
                <p className="fs-4 text-danger mt-3">
                  Home <i className="ri-arrow-right-long-line text-black" />
                  <span className="text-black">Contact</span>
                </p>
              </h1>
            </div>
            <div className="col text-center p-4">
              <img
                className="w-75 rounded"
                src="https://html.pixelfit.agency/pesco/assets/images/bg/page-img-1.png"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* ================= CONTACT INFO ================= */}
        <section className="container mt-5">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="shadow p-4 rounded bg-white h-100">
                <i className="ri-map-pin-line fs-1 text-danger" />
                <h5 className="mt-3">Our Location</h5>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="shadow p-4 rounded bg-white h-100">
                <i className="ri-phone-line fs-1 text-danger" />
                <h5 className="mt-3">Phone Number</h5>
                <p>+91 9832353832</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="shadow p-4 rounded bg-white h-100">
                <i className="ri-mail-line fs-1 text-danger" />
                <h5 className="mt-3">Email Address</h5>
                <p>info@pisco.com</p>
              </div>
            </div>
          </div>
        </section>
        {/* ================= CONTACT FORM ================= */}
        <section className="container mt-5 mb-5">
          <div className="row">
            <div className="col-lg-7">
              <div className="shadow p-4 rounded bg-white">
                <h3 className="mb-4">Send Us a Message</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                  <button className="btn btn-dark px-4">
                    <i className="ri-send-plane-line" /> Send Message
                  </button>
                </form>
              </div>
            </div>
            {/* Map Section */}
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="rounded overflow-hidden shadow">
                <iframe
                  src="https://maps.google.com/maps?q=Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height={420}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        {/* ================= NEWSLETTER ================= */}
        <section className="container-fluid">
          <div className="container p-4 rounded-5 border shadow d-flex flex-wrap row-cols-md-2 bg-light">
            <div className="col p-3">
              <h3>Our Newsletter</h3>
              <h4>
                Get weekly updates and <span className="text-danger">20% off</span>{" "}
                your first purchase
              </h4>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
                <button className="btn btn-dark">Subscribe</button>
              </div>
            </div>
            <div className="col text-end d-none d-md-block">
              <img
                className="w-75"
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
