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

  const [page, setPage] = useState(1)

  const itemsPerPage = 10

  const lastIndex = page * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage

  const currentImages = images.slice(firstIndex, lastIndex)

  const totalPages = Math.ceil(images.length / itemsPerPage)

  return (
    <div>
      <h2>Images Pagination</h2>

      {currentImages.map((image) => (
        <p key={image.id}>{image.title}</p>
      ))}

      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {page} of {totalPages}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  )
}