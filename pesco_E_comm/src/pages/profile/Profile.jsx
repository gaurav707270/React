import React from 'react'

export default function Profile() {
  return (
    <div>
      <>
        {/* Cover Section */}
        <div className="bg-dark text-white text-center py-5">
          <img
            width="50px"
            src="gaurav.jpg"
            className="rounded-circle border border-3 border-white mb-3"
            alt="profile"
          />
          <h3 className="fw-bold">kharate Gaurav</h3>
          <p className="mb-0">Premium Member</p>
        </div>
        {/* Profile Info */}
        <div className="container my-5">
          <div className="row">
            {/* Left Side - User Info */}
            <div className="col-lg-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-header bg-dark text-white">
                  Personal Information
                </div>
                <div className="card-body">
                  <p>
                    <strong>Email:</strong> gauravkharate@email.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 9876543210
                  </p>
                  <p>
                    <strong>Address:</strong> surat, India
                  </p>
                  <button className="btn btn-dark w-100 mt-2">Edit Profile</button>
                </div>
              </div>
            </div>
            {/* Right Side - Orders */}
            <div className="col-lg-8">
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-dark text-white">Order History</div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#1025</td>
                        <td>Feb 20, 2026</td>
                        <td>
                          <span className="badge bg-success">Delivered</span>
                        </td>
                        <td>₹4,500</td>
                      </tr>
                      <tr>
                        <td>#1020</td>
                        <td>Feb 15, 2026</td>
                        <td>
                          <span className="badge bg-warning text-dark">Pending</span>
                        </td>
                        <td>₹2,300</td>
                      </tr>
                      <tr>
                        <td>#1012</td>
                        <td>Feb 10, 2026</td>
                        <td>
                          <span className="badge bg-danger">Cancelled</span>
                        </td>
                        <td>₹1,200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Wishlist Shortcut */}
              <div className="card shadow-sm">
                <div className="card-header bg-dark text-white">Quick Links</div>
                <div className="card-body">
                  <a href="wishlist.html" className="btn btn-outline-dark me-2">
                    View Wishlist
                  </a>
                  <a href="product.html" className="btn btn-outline-dark">
                    Shop More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
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
