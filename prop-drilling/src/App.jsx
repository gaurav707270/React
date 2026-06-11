import React, { useState } from 'react'
import Input from "./components/Input";

export default function App() {
    const [text, setText] = useState("")
    return (
        <div>
            <h1 className='text-center fs-3'>Prop Drilling</h1>
            <Input text={text} setText={setText} />
        </div>
    )
}
