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

  // const [increase, setIncrease] = useState(0)

  // const increaseQty = (index) => {
  //   const items = JSON.parse(localStorage.getItem("cart") || [])

  //   const updatedItems = items.map((item) => {
  //     return {
  //       ...item,
  //       qty: item.qty + 1
  //     };
  //   });


  //   localStorage.setItem("cart", JSON.stringify(updatedItems));


  //   setIncrease(prev => prev + 1);

  // }

  // const increaseQty = (index) => {
  //   const updatedProducts = [...products];

  //   updatedProducts[index].qty =
  //     (updatedProducts[index].qty || 0) + 1;

  //   setProducts(updatedProducts);
  //   localStorage.setItem("cart", JSON.stringify(updatedProducts));
  // };

  // const decreaseQty = (index) => {
  //   const updatedProducts = [...products];

  //   if (updatedProducts[index].qty > 1) {
  //     updatedProducts[index].qty -= 1;
  //   } else {
  //     // remove if qty = 1
  //     updatedProducts.splice(index, 1);
  //   }

  //   setProducts(updatedProducts);
  //   localStorage.setItem("cart", JSON.stringify(updatedProducts));
  // };

  const incrementQty = (index) => {
    const updatedCart = products.map((item, i) =>
      i === index ? { ...item, qty: item.qty + 1 } : item
    );

    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrementQty = (index) => {
    const updatedCart = products.map((item, i) =>
      i === index && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );

    setProducts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const [isSort, setsort] = useState(false)

  const sortProducts = () => {
    console.log(isSort)
    setsort(!isSort)
    console.log(isSort)
    const copy = [...products];
    copy.sort((a, b) => (isSort) ? a.price - b.price : b.price - a.price);
    setProducts(copy)
  }


  return (
    <>
      <div className=''>
        <div className='mt-3 py-1 d-none d-sm-block  '>
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

            <button
              onClick={sortProducts}
              className="btn btn-outline-warning"
              type="submit"
              id="button-addon2"
            >
              Sort
            </button>
          </div>
        </div>


        <div className='container-fluid d-flex justify-content-center bg-black  '>

          <div className='container row justify-content-center bg-dark '>
            {
              products.map((product, i) =>
                <div key={i} className="card m-2 my-5" style={{ width: 290, height: 450 }}>
                  <img style={{ height: 200 }} src={product.image} className="card-img-top" alt="image" />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.category}</p>
                    <p className="card-text"> ${product.price}</p>

                    <div className=' d-flex justify-content-between'>
                      <p className="card-text">Qty: {product.qty}</p>
                      <div >
                        <button
                          onClick={() => incrementQty(i)}
                          style={{ width: 50, height: 30 }}
                          className='m-1 btn btn-outline-primary text-center'
                        >
                          ++
                        </button>

                        <button
                          onClick={() => decrementQty(i)}
                          style={{ width: 50, height: 30 }}
                          className='m-1 btn btn-outline-danger text-center'
                        >
                          --
                        </button>
                      </div>
                    </div>


                    <button
                      className="btn btn-outline-danger my-2"
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
      </div>
    </>
  )
}