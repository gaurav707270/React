import React, { useState } from 'react'

export default function App() {

  const [inputText, setInputText] = useState(" ")
  const [countLatter, setCountLatter] = useState(0)
  const [countWord, setCountWard] = useState(0)
  const [speedRead, setSpeedRead] = useState(0)

  return (
    <div className=' vh-100 bg-dark' >
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
            setCountLatter(inputText.length)
          }} className=' btn btn-success m-2'>Count Letters </button>


          <button style={{ width: "150px", height: "40px" }} onClick={() => {
            setCountWard(inputText.split(" ").length)
          }} className=' btn btn-warning m-2'>Count words</button>

          <button style={{ width: "150px", height: "40px" }} onClick={() => {
            setSpeedRead(inputText.split(" ").length * 60 / 200)
          }} className=' btn btn-info m-2'> Reading Time</button>
        </div>

        <hr />

        <div className="container ">
          <div className="card shadow-lg border-0 rounded-4 p-4">
            

            <div className="card bg-light border-0 shadow-sm p-3 mb-4">
              <h5 className="text-secondary">📝 Preview</h5>
              <p className="fs-5">
                {inputText || "Start typing to see preview..."}
              </p>
            </div>

            <div className="row g-4 text-center">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 p-3">
                  <h1>🔤</h1>
                  <h5>Letters</h5>
                  <h3 className="text-primary">{countLatter}</h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 p-3">
                  <h1>📖</h1>
                  <h5>Words</h5>
                  <h3 className="text-success">{countWord}</h3>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card border-0 shadow-sm rounded-4 p-3">
                  <h1>⚡</h1>
                  <h5>Reading Time</h5>
                  <h3 className="text-danger">{speedRead} min</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>


  )
}
