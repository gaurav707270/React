import React, { useState } from 'react'

export default function App() {

  const [inputText, setInputText] = useState(" ")
  const [countLatter, setCountLatter] = useState(0)

  return (
    <div className=' vh-100'>
      <div className='d-flex justify-content-center bg-secondary'>
        <h1 className='text-center text-white'>Text Utils App</h1>
      </div>

      <div className='container'>
        <div className=' d-flex justify-content-center mt-2 '>
          <div className="w-75">
            <label htmlFor="exampleFormControlTextarea1" className="form-label fs-4 text-white">
              Enter The Text
            </label>
            <textarea
              onChange={(e) => {
                setInputText(e.target.value)
              }}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              defaultValue={""}
            />
          </div>

        </div>


        <div className='d-flex justify-content-center mt-3'>
          <button style={{ width: "150px", height: "40px" }} onClick={() => {
            setInputText(inputText.toUpperCase())
          }} className=' btn btn-primary m-2'>To Uppercase</button>

          <button style={{ width: "150px", height: "40px" }} onClick={() => {
            setInputText(inputText.toLowerCase())
          }} className=' btn btn-secondary m-2'>To LowerCase</button>

          <button style={{ width: "150px", height: "40px" }} onClick={() => {
            setCountLatter(inputText.length())
          }} className=' btn btn-success m-2'>Count Letters </button>
          <button style={{ width: "150px", height: "40px" }} onClick={() => {

          }} className=' btn btn-warning m-2'>Count words</button>
          <button style={{ width: "150px", height: "40px" }} onClick={() => {

          }} className=' btn btn-info m-2'> Reading Time</button>
        </div>

        <hr />

        <div>
          <p> {inputText}</p>
          <p className='position-fixed'>Count Of Latter : {countLatter}</p>

        </div>


      </div>
    </div>


  )
}
