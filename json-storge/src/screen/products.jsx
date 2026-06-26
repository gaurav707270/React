import axios from 'axios'
import React, { useState, useEffect } from 'react'

const productsURL = "http://localhost:3000/products"

export default function Products() {

  const [allProducts, setAllProducts] = useState([])

  const fetchProducts = (async () => {
    const res = await axios.get(productsURL)
    setAllProducts(res.data)

  })

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      {
        allProducts.map((product, i) => <div key={i}>
          <div className=" mt-5">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="card shadow-lg border-0 rounded-4 h-100">

                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top p-3"
                    style={{ height: "250px", objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <span className="badge bg-primary mb-2">
                      {product.category}
                    </span>

                    <h4 className="card-title">{product.title}</h4>

                    <h5 className="text-success">
                      ₹{product.price.toLocaleString()}
                    </h5>

                    <p className="text-muted">
                      Stock Available: {product.stock}
                    </p>

                    <div className="d-flex justify-content-between mt-3">
                      <button className="btn btn-warning">
                        Edit
                      </button>

                      <button className="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}
