import { useState } from "react";


const TextUtils = () => {
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [countWords, setCountWord] = useState(0);

    return < >
        <div className="container">
            <div className="text-center">
                <h2 > Text-Utils Example</h2>
            </div>

            <div className=" p-5">
                <div className="form-floating">
                    <textarea onChange={(e) => setText(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 250 }}></textarea>
                    <label htmlfor="floatingTextarea2">Enter your text here.</label>
                </div>
            </div>

            <div className=" px-3">
                <button onClick={() => setText(text.toUpperCase())} className="btn btn-primary m-1"> To Uppercase</button>
                <button onClick={() => setText(text.toLowerCase())} className="btn btn-secondary m-1"> To Lowercase</button>
                <button onClick={() => setCount(text.length)} className="btn btn-info m-1"> Count Letters </button>
                <button onClick={() => setCountWord(text.split(" ").length)} className="btn btn-warning"> Count words </button>
            </div>

            <hr />
            <div>
                <p>{text}</p>
                <p>Texts Count :{count}</p>
                <p>Words Count :{countWords}</p>
            </div>

        </div>
    </>
}

export default TextUtils;