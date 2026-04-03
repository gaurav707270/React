import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductsCard from '../products-Card04/ProductsCard';

export default function Home() {

  useEffect(() => {
    fetuchProducts();
  }, [])

  const [products, setProducts] = useState([]);


  // async function fetuchProducts() {
  //   const res = await fetch("https://dummyjson.com/products")
  //   const data = await res.json();
  //   setProducts(data.products)
  // }


  const fetuchProducts = async () => {
    const res = await axios.get("https://dummyjson.com/products")

    setProducts(res.data.products)
  }



  // const addTOCart = (value) => {
  //   console.log("function are calling ")
  //   const cartList = JSON.parse(localStorage.getItem("cart")) || [];
  //   cartList.push(value);
  //   localStorage.setItem("cart", JSON.stringify(cartList));
  // };

  const addToCart = (value) => {
    const cartList = JSON.parse(localStorage.getItem("cart")) || [];

    const res = cartList.findIndex((item) => item.name === value.name);

    if (res == -1) {
      cartList.push(value)

    }

    if (res !== -1) {
      cartList[res].qty++;
    }
    localStorage.setItem("cart", JSON.stringify(cartList));
  };

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
      <div>

        <div className='bg-white py-1'>
          <div className="input-group mb-3 container w-50 ">
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
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>

        </div>

        <div className='container-fluid d-flex justify-content-center bg-black'>
          <div className=' container row  justify-content-center bg-dark'>
            {
              products.map((product, i) => <ProductsCard key={i} name={product.title} image={product.images[0]} des={product.description} dis={product.discountPercentage} stock={product.stock} category={product.category} price={product.price} addToCart={addToCart} />)
            }
          </div>
        </div>

      </div>
    </>
  )
}
