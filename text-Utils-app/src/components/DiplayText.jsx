import React, { useState, useEffect } from 'react'

export default function DiplayText() {
    const [texts, setTexts] = useState(JSON.parse(localStorage.getItem("texts")) || [])

    // const removeText = (i) => {
    //     const newTexts = [...texts]

    //     setTexts(newTexts.filter((text) => newTexts[i].inputText !== text))
    // }

    // useEffect(() => {
    //     localStorage.setItem("texts", JSON.stringify(texts))
    // }, [])


    const removeText = (i) => {
        setTexts(texts.filter((_, index) => index !== i));
    }

    useEffect(() => {
        localStorage.setItem("texts", JSON.stringify(texts));
    }, [texts]);

    return (
        <div className='container  '>
            <h1 className=' text-white m-2 p-2 text-center'>Your Text List</h1>

            <div style={{ height: "550px" }} className=' bg-white p-3 shadow   rounded overflow-y-scroll'>
                {
                    texts.map((text, i) => {
                        return <div key={i} className='  bg-light shadow m-3 p-2 rounded d-flex justify-content-between'>
                            <div>
                                <p><strong>Text :</strong> {text.inputText}</p>
                                <p><strong>Letters :</strong> {text.countLatter}</p>
                                <p><strong>Words :</strong> {text.countWord}</p>
                                <p><strong>Reading Time :</strong> {text.speedRead} min</p>
                            </div>

                            <div className=' d-flex  align-items-center'>
                                <button className='btn btn-danger' onClick={() => removeText(i)}>Remove</button>
                            </div>
                        </div>

                    })
                }
            </div>
        </div>
    )
}
