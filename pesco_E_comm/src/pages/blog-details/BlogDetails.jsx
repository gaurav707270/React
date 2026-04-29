import React from 'react'

export default function BlogDetails() {
  return (
    <div>
      <>
        <section className="bg-light py-5 text-center">
          <div className="container">
            <h1 className="fw-bold">Top Fashion Trends in 2026</h1>
            <p className="text-muted">February 25, 2026 | By Admin</p>
          </div>
        </section>
        {/* Blog Details */}
        <div className="container my-5">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <img
                src="https://source.unsplash.com/1000x500/?fashion"
                className="img-fluid rounded mb-4"
                alt="blog"
              />
              <p>
                Fashion in 2026 is all about bold colors, oversized silhouettes, and
                sustainable fabrics. Designers are focusing more on eco-friendly
                materials while keeping style and comfort in perfect balance.
              </p>
              <p>
                Streetwear continues to dominate global fashion trends. From oversized
                jackets to minimal sneakers, people prefer comfort with style. Neutral
                tones mixed with vibrant highlights are trending everywhere.
              </p>
              <blockquote className="blockquote bg-light p-3 border-start border-4 border-dark">
                <p className="mb-0">
                  "Fashion is the armor to survive the reality of everyday life."
                </p>
                <footer className="blockquote-footer">Bill Cunningham</footer>
              </blockquote>
              <p>
                Online platforms like Pisco are making fashion accessible worldwide.
                With just a few clicks, customers can explore trending collections and
                exclusive offers.
              </p>
              {/* Tags */}
              <div className="mt-4">
                <strong>Tags:</strong>
                <span className="badge bg-dark">Fashion</span>
                <span className="badge bg-secondary">Trends</span>
                <span className="badge bg-success">Lifestyle</span>
              </div>
              {/* Comments Section */}
              <div className="mt-5">
                <h4>Leave a Comment</h4>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows={4}
                      placeholder="Your Comment"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Categories */}
              <div className="card mb-4 shadow-sm">
                <div className="card-header bg-dark text-white">Categories</div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Fashion</li>
                  <li className="list-group-item">Shopping</li>
                  <li className="list-group-item">Lifestyle</li>
                  <li className="list-group-item">Technology</li>
                </ul>
              </div>
              {/* Recent Posts */}
              <div className="card shadow-sm">
                <div className="card-header bg-dark text-white">Recent Posts</div>
                <div className="card-body">
                  <p>✔ Why Online Shopping is Growing Fast</p>
                  <p>✔ How to Choose the Best Products</p>
                  <p>✔ Top Fashion Trends in 2026</p>
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
