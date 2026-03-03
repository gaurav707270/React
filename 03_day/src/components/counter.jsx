import { useState } from "react";
import './counter.css';

const Counter = () => {
    const [count, setCount] = useState(0)
    return <>
        <h1>{count}</h1>
        <div className="allBtn">
            <button onClick={() => setCount(count + 1)}>++</button>
            <button onClick={() => setCount(count - 1)}>--</button>
            <button onClick={() => setCount(count * 2)}>*2</button>
            <button onClick={() => setCount(count / 2)}>/2</button>
        </div>
    </>
}

export default Counter;