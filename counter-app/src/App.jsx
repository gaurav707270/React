import React, { useState } from 'react'

export function App() {

  const [count, setCount] = useState(0);

  return (
    <div className='d-flex justify-content-center align-items-center flex-column vh-100'>
      <h1 className='fs-1 text-white '>{count}</h1>
      <div>
        <button onClick={() => {
          setCount(count + 1)
        }} style={{ width: 150 }} className=' m-2 btn btn-primary'>++</button>
        <button onClick={() => {
          setCount(count - 1)
        }} style={{ width: 150 }} className=' m-2 btn btn-secondary'>--</button>
        <button onClick={() => {
          setCount(count * 2)
        }} style={{ width: 150 }} className=' m-2 btn btn-info'>**</button>
        <button onClick={() => {
          setCount(count / 2)
        }} style={{ width: 150 }} className=' m-2 btn btn-success'>//</button>
      </div>
    </div>
  )
}
