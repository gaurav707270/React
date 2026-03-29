import React, { useState } from 'react'

export default function Cart() {

  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);


  return (
    <>
      <div className='container-fluid d-flex justify-content-center bg-black '>
        <div className=' container row  justify-content-center bg-dark'>
          {
            products.map((product, i) =>
              <div key={i} className="card m-2 " style={{ width: 250, height: 400 }}>
                <img style={{ height: 200 }} src={product.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text"> ${product.price}</p>
                  <button href="#" onClick={() => addTOCart(product)} className="btn btn-outline-danger">
                    Remove
                  </button>
                </div>
              </div>
            )

          }
        </div>
      </div>
    </>
  )
}
