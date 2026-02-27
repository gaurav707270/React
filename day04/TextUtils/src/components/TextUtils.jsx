import { useState, useEffect } from "react";


const TextUtils = () => {

    useEffect(() => {
        setText(localStorage.getItem("text") ?? "")
        setCount(localStorage.getItem("count"))
        setCountWord(localStorage.getItem("word "))
        setSecond(localStorage.getItem("second "))
    }, [])

    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
    const [countWords, setCountWord] = useState(0);
    const [second, setSecond] = useState(0);

    return < >
        <div className="container">
            <div className="text-center">
                <h2 > Text-Utils Example</h2>
            </div>

            <div className=" p-5">
                <div className="form-floating">
                    <textarea value={text} onChange={(e) => {
                        setText(e.target.value);
                        localStorage.setItem("text", text);

                    }} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 250 }}></textarea>
                    <label htmlFor="floatingTextarea2">Enter your text here.</label>
                </div>
            </div>

            <div className=" px-3">
                <button onClick={() => {
                    setText(text.toUpperCase())
                    localStorage.setItem("text", text.toLowerCase());
                }}
                    className="btn btn-primary m-1"> To Uppercase</button>

                <button onClick={() => {
                    setText(text.toLowerCase())
                    localStorage.setItem("text", text.UpperCase());
                }}
                    className="btn btn-secondary m-1"> To Lowercase</button>

                <button onClick={() => {
                    setCount(text.length);
                    localStorage.setItem("count", count.toString())
                }} className="btn btn-info m-1"> Count Letters </button>

                <button onClick={() => {
                    setCountWord(text.split(" ").length)
                    localStorage.setItem("word", countWords.toString())
                }} className="btn btn-warning m-1"> Count words </button>

                <button onClick={() => {
                    setSecond(text.split(" ").length * 60 / 200)
                    localStorage.setItem("second", second.toString())
                }} className="btn btn-success m-1"> Check Reading Time </button>

                <button onClick={() => {
                    setText(" ");
                    setCount(0);
                    setCountWord(0);
                    setSecond(0);
                    localStorage.clear();
                }} className="btn btn-danger"> Clear Text </button>
            </div>

            <hr />
            <div>
                <p>{text}</p>
                <p>Texts Count :{count}</p>
                <p>Words Count :{countWords}</p>
                <p>Readind Time :{second}s</p>

            </div>

        </div >
    </>
}

export default TextUtils;