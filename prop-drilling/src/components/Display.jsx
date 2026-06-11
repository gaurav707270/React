import React from 'react'

export default function display({ newText, setNewText }) {
    return (
        <div className='container'>
            <h3 className='text-center mt-5'>all Text</h3>
            <div className='d-flex justify-content-center'>
                <div className=' rounded shadow ' style={{ width: "700px", height: " 400px" }}>
                    {newText}
                </div>

            </div>
            <div className=' d-flex justify-content-end'>
                <button className='btn btn-danger' onClick={() => {
                    setNewText(" ")
                }} > Remove</button>
            </div>
        </div>
    )
}
