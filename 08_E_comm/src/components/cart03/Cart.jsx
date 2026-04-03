import React, { useState, useEffect } from 'react'
import { useSubmit } from 'react-router';

export default function Cart() {

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );




  const removeCart = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);

    setProducts(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  const [total, setTotal] = useState(0);


  const countTotal = () => {
    const sum = products.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);

    setTotal(sum);
  };

  useEffect(() => {
    countTotal();
  }, [products]);


  const [search, setSearch] = useState("")

  const searchProduct = () => {
    //   const result = products.filter((product) => product.title === search)
    //   console.log()

    const result = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );


    setProducts(result)
  }




  return (
    <>
      <div className='bg-white py-1'>
        <div className="input-group mb-3 container w-50">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Recipient’s username"
            aria-label="Recipient’s username"
            aria-describedby="button-addon2"
          />
          <button
            onClick={searchProduct}
            className="btn btn-outline-primary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>

          <button
            onClick={() => window.location.reload()}
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Reset
          </button>
        </div>
      </div>


      <div className='container-fluid d-flex justify-content-center bg-black  '>

        <div className='container row justify-content-center bg-dark '>
          {
            products.map((product, i) =>
              <div key={i} className="card m-2 my-5" style={{ width: 250, height: 450 }}>
                <img style={{ height: 200 }} src={product.image} className="card-img-top" alt="image" />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text"> ${product.price}</p>
                  <p className="card-text">Qty: {product.qty}</p>


                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeCart(i)}
                  >
                    Remove
                  </button>

                </div>
              </div>
            )
          }
        </div>

        <div className='bg-dark w-25'>
          <h1 className='text-white text-center'>Total Amount</h1>
          < p className=' text-white'> Price : {total}</p>
        </div>
      </div>
    </>
  )
}