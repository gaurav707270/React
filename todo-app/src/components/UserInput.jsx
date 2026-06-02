import React from 'react'
import { useState } from "react";

export default function UserInput() {

    const getTodos = () => {
        return JSON.parse(localStorage.getItem("todo")) || [];
    };

    const [inputText, setInputText] = useState("")
    const [inputPriority, setInputPriority] = useState("")
    const [todo, setTodo] = useState([])
    // console.log(todo)

    return (
        <div className="container py-5">
            <div
                className="card shadow-lg border-0 mx-auto"
                style={{ maxWidth: "900px" }}
            >
                <div className="card-body p-4">
                    <h2 className="text-center fw-bold mb-4">
                        📝 Task Manager
                    </h2>

                    <div className="row g-3 align-items-center">
                        {/* Task Input */}
                        <div className="col-md-5">
                            <input onChange={(e) => {
                                setInputText(e.target.value)
                            }}
                                type="text"
                                className="form-control"
                                placeholder="Enter your task..."
                            />
                        </div>

                        {/* Priority */}
                        <div className="col-md-4">
                            <select onChange={(e) => {
                                setInputPriority(e.target.value)
                            }} className="form-select">
                                <option value="">Select Priority</option>
                                <option value="High">🔴 High</option>
                                <option value="Normal">🟡 Normal</option>
                                <option value="Low">🟢 Low</option>
                            </select>
                        </div>

                        {/* Button */}
                        <div className="col-md-3">
                            <button onClick={() => {
                                console.log([...todo, { text: inputText, priority: inputPriority }])
                                setTodo([...todo, { text: inputText, priority: inputPriority }]);

                            }} className="btn btn-primary w-100">
                                + Add Task
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
