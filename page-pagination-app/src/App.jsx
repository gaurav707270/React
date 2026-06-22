import React, { useState, useEffect } from 'react'

const url = "https://jsonplaceholder.typicode.com/photos"


export default function App() {

  const [allImages, setAllImages] = useState([])


  const fetchdata = async () => {
    const res = await fetch(url)
    const images = await res.json()

    setAllImages(images)

  }

  const [page, setPage] = useState({ start: 0, end: 9 })

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div>
      {
        allImages.map((image, i) =>
          <div key={i}>
            <h3>{image.title}</h3>
          </div>
        )
      }
    </div>
  )
}
