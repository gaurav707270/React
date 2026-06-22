import React, { useEffect } from 'react'
import axios from "axios"

const url = "https://dummyjson.com/products"

export default function App() {

  const fetchProducts = async () => {
    const res = await axios.get(url)
    console.log(res.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
    </div>
  )
}
