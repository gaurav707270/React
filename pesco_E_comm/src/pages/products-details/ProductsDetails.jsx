import React from 'react'

export default function ProductsDetails() {
  return (
    <div>
      <>
        {/*  PRODUCT DETAILS SECTION  */}
        <section className="container mt-5">
          <div className="row">
            {/* Product Image */}
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid rounded shadow"
                src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-3.png"
                alt="product"
              />
            </div>
            {/* Product Info */}
            <div className="col-lg-6">
              <h2>Lightweight Linen Summer Dress</h2>
              {/* Rating */}
              <div className="mb-2">
                <i className="ri-star-fill text-warning" />
                <i className="ri-star-fill text-warning" />
                <i className="ri-star-fill text-warning" />
                <i className="ri-star-fill text-warning" />
                <i className="ri-star-fill text-warning" />
                <span>(80 Reviews)</span>
              </div>
              {/* Price */}
              <h3 className="text-danger">
                $40.00
                <small className="text-muted text-decoration-line-through">
                  $80.00
                </small>
              </h3>
              {/* Description */}
              <p className="mt-3">
                This elegant linen summer dress is lightweight, breathable, and
                perfect for warm weather. Designed with premium quality fabric and
                stylish finishing.
              </p>
              {/* Size Selection */}
              <div className="mt-3">
                <h5>Select Size</h5>
                <button className="btn btn-outline-dark m-1">S</button>
                <button className="btn btn-outline-dark m-1">M</button>
                <button className="btn btn-outline-dark m-1">L</button>
                <button className="btn btn-outline-dark m-1">XL</button>
              </div>
              {/* Quantity */}
              <div className="mt-3">
                <h5>Quantity</h5>
                <input type="number" defaultValue={1} className="form-control w-25" />
              </div>
              {/* Buttons */}
              <div className="mt-4">
                <button className="btn btn-dark px-4">Add to Cart</button>
                <button className="btn btn-danger px-4">Buy Now</button>
                <button className="btn btn-outline-secondary">
                  <i className="ri-heart-line" />
                </button>
              </div>
              {/* Extra Info */}
              <div className="mt-4 border-top pt-3">
                <p>
                  <i className="ri-truck-line" /> Free Shipping Available
                </p>
                <p>
                  <i className="ri-refresh-line" /> 7 Days Easy Return
                </p>
                <p>
                  <i className="ri-secure-payment-line" /> 100% Secure Payment
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  PRODUCT TABS  */}
        <section className="container mt-5">
          <ul className="nav nav-tabs" id="myTab">
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#desc"
              >
                Description
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#info"
              >
                Additional Info
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#review"
              >
                Reviews
              </button>
            </li>
          </ul>
          <div className="tab-content p-3 border">
            <div className="tab-pane fade show active" id="desc">
              <p>
                Our premium collection dress offers comfort and style combined. Ideal
                for casual outings and summer events.
              </p>
            </div>
            <div className="tab-pane fade" id="info">
              <p>Material: 100% Linen</p>
              <p>Color: Cream</p>
              <p>Category: Women Fashion</p>
            </div>
            <div className="tab-pane fade" id="review">
              <p>⭐⭐⭐⭐⭐ Amazing product quality!</p>
              <p>⭐⭐⭐⭐ Very comfortable and stylish.</p>
            </div>
          </div>
        </section>
        {/* RELATED PRODUCTS  */}
        <section className="container mt-5 mb-5">
          <h3 className="mb-4">Related Products</h3>
          <div className="row">
            <div className="col-md-3 text-center">
              <img
                className="img-fluid rounded"
                src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-2.png"
              />
              <p>Cozy Knit Sweater</p>
              <p className="text-danger">$23.00</p>
            </div>
            <div className="col-md-3 text-center">
              <img
                className="img-fluid rounded"
                src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-4.png"
              />
              <p>Leather Jacket</p>
              <p className="text-danger">$67.00</p>
            </div>
            <div className="col-md-3 text-center">
              <img
                className="img-fluid rounded"
                src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-3.png"
              />
              <p>Summer Dress</p>
              <p className="text-danger">$40.00</p>
            </div>
            <div className="col-md-3 text-center">
              <img
                className="img-fluid rounded"
                src="https://html.pixelfit.agency/pesco/assets/images/products/feature-product-5.png"
              />
              <p>Casual Shirt</p>
              <p className="text-danger">$35.00</p>
            </div>
          </div>
        </section>
      </>

    </div>
  )
}
