import React, { useEffect, useState } from 'react'
import axios, { all } from "axios"

const url = "https://dummyjson.com/products"

export default function App() {

  const [allProducts, setAllProducts] = useState([])

  const fetchProducts = async () => {
    const res = await axios.get(url)
    setAllProducts(res.data.products)
    console.log(allProducts)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const [search, setSearch] = useState("")

  const searchProducts = (e) => {
    setSearch(e.target.value)
  }


  const handleSearch = () => {
    if (search == " ") {
      fetchProducts()
    }
    else {
      setAllProducts(allProducts.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      ))
    }
    // console.log(allProducts)
  }


  return (

    <div className='container d-flex justify-content-center justify-content-evenly flex-wrap'>
      <div className=' w-100 text-center my-2'>
        <h2 > Search Products</h2>
        <div className='d-flex align-items-center justify-content-center'>
          <input onChange={searchProducts} className='p-1 rounded mx-2' type="text" placeholder='Search Products' />
          <button onClick={handleSearch} className='btn btn-outline-primary'>Search</button>
        </div>

      </div>

      {
        allProducts.map((product, i) => <div className=' m-2' key={i}>
          <div className="card" style={{ width: "18rem" }}>
            <img src={product.images[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

        </div>)
      }
    </div>
  )
}
