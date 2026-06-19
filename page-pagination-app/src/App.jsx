import React, { useState, useEffect } from 'react'

const url = "https://jsonplaceholder.typicode.com/photos"

export default function App() {

  const [images, setImages] = useState([])

  const handleFetchImage = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setImages(data)

  }

  useEffect(() => {
    handleFetchImage()
  }, [])

  const [page, setPage] = useState({ start: 0, page: 1, end: 9 })

  


  return (
    <div>
      {
        images.map((image, i) => {
          return <p key={i}>  {image.title}</p>
        })
      }
    </div>
  )
}
