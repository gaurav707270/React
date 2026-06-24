import React, { useEffect, useState } from 'react'
import axios, { all } from "axios"

const url = "https://dummyjson.com/products"

export default function App() {

  const [allProducts, setAllProducts] = useState([])
  const [storge, setStorge] = useState([])

  const fetchProducts = async () => {
    const res = await axios.get(url)
    setAllProducts(res.data.products)
    setStorge(res.data.products)
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
      setAllProducts(storge.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      ))
    }
    // console.log(allProducts)
  }

  const categoryfilter = (e) => {
    setAllProducts(storge.filter((product) => product.category == e.target.value))
    console.log(e.target.value)
  }

  const [price, setPrice] = useState(1)

  const pricefilter = (e) => {
    setAllProducts(storge.filter((product) => Number(product.price) <= Number(e.target.value)))
    console.log(e.target.value)
    setPrice(e.target.value)
  }


  return (

    <div className='container d-flex justify-content-center justify-content-evenly flex-wrap'>
      <div className=' w-100 text-center my-2'>
        <h2 > Search Products</h2>
        <div className='d-flex align-items-center justify-content-center'>
          <input onChange={searchProducts} className='p-1 rounded mx-2' type="text" placeholder='Search Products' />
          <button onClick={handleSearch} className='btn btn-outline-primary'>Search</button>
          <button onClick={fetchProducts} className='btn btn-outline-info mx-2'>Refresh</button>

          <div>
            <div className="container   ">
              <div className="row justify-content-center">


                <select onChange={categoryfilter} className="form-select shadow-sm">
                  <option defaultValue="">
                    Select Category
                  </option>
                  <option value="beauty">💄 Beauty</option>
                  <option value="fragrances">🌸 Fragrances</option>
                  <option value="furniture">🛋️ Furniture</option>
                  <option value="groceries">🛒 Groceries</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <input onChange={pricefilter} min={1} max={2500} type="range" className=' mx-2 ' />
            <p className='p-0'>Range : {price}</p>
          </div>
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
                View More
              </a>
            </div>
          </div>

        </div>)
      }
    </div>
  )
}
