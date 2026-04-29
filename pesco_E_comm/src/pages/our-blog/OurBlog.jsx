import React from 'react'

export default function OurBlog() {
  return (
    <div>
      <>
        {/* Blog Header */}
        <section className="bg-light py-5 text-center">
          <div className="container">
            <h1 className="fw-bold">Our Blog</h1>
            <p className="text-muted">
              Latest news, fashion trends &amp; updates from Pisco
            </p>
          </div>
        </section>
        {/* Blog Content */}
        <div className="container my-5">
          <div className="row">
            {/* Blog Posts */}
            <div className="col-lg-8">
              {/* Blog Card 1 */}
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://source.unsplash.com/800x400/?fashion"
                  className="card-img-top"
                  alt="blog"
                />
                <div className="card-body">
                  <h5 className="card-title">Top Fashion Trends in 2026</h5>
                  <p className="text-muted">February 25, 2026 | By Admin</p>
                  <p className="card-text">
                    Discover the latest fashion trends that are ruling the industry in
                    2026. From modern streetwear to elegant classics.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
              {/* Blog Card 2 */}
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://source.unsplash.com/800x400/?shopping"
                  className="card-img-top"
                  alt="blog"
                />
                <div className="card-body">
                  <h5 className="card-title">Why Online Shopping is Growing Fast</h5>
                  <p className="text-muted">February 20, 2026 | By Admin</p>
                  <p className="card-text">
                    Online shopping has become the future of retail. Learn why more
                    people prefer buying products online today.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Read More
                  </a>
                </div>
              </div>
              {/* Blog Card 3 */}
              <div className="card mb-4 shadow-sm">
                <img
                  src="https://source.unsplash.com/800x400/?ecommerce"
                  className="card-img-top"
                  alt="blog"
                />
                <div className="card-body">
                  <h5 className="card-title">How to Choose the Best Products</h5>
                  <p className="text-muted">February 15, 2026 | By Admin</p>
                  <p className="card-text">
                    A complete guide to selecting high-quality products while shopping
                    online. Save money and buy smart.
                  </p>
                  <a href="#" className="btn btn-dark">
                    Read More
                  </a>
                </div>
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
                  <p>✔ Top Fashion Trends in 2026</p>
                  <p>✔ Why Online Shopping is Growing Fast</p>
                  <p>✔ How to Choose the Best Products</p>
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
