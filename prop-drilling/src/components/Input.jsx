import React, { useState } from 'react'
import Display from "./Display";

export default function input({ text, setText }) {
    const [newText, setNewTexte] = useState("")
    return (
        <div>

            <div className='d-flex justify-content-center mt-5'>
                <div style={{ width: "500px" }} className="input-group ">
                    <input
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Enter the text"
                        aria-label="Recipient’s username"
                        aria-describedby="button-addon2"
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                    >
                        Button
                    </button>
                </div>

            </div>

            <Display text={text} setText={setText} />
        </div>
    )
}
