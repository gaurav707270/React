import React, { useEffect, useState } from 'react'

export default function DisplayTask() {


    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")) || []);
    }, []);

    console.log(todos)
    return (
        <div>
            <div className="card mt-2 shadow border-0 mx-auto" style={{ maxWidth: "1200px", height: "55vh" }}>
                <div className="card-body overflow-hidden overflow-y-scroll">
                    <h4 className="mb-3">Your Tasks</h4>



                    {
                        todos.map((todo) => {
                            return <div className="d-flex justify-content-between align-items-center border rounded p-3 mb-2 ">
                                <div>
                                    <h6 className="mb-1">{todo.text}</h6>
                                    <span className="badge bg-danger">{todo.priority}</span>
                                </div>

                                <div className="d-flex gap-2">
                                    <button className="btn btn-warning btn-sm">
                                        Edit
                                    </button>
                                    <button className="btn btn-danger btn-sm">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        })
                    }

                </div>
            </div >
        </div >)
}

