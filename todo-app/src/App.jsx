import React, { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("")
  const [inputPriority, setInputPriority] = useState("")
  const [todos, setTodos] = useState([])


  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getTodos = () => {
    return JSON.parse(localStorage.getItem("todos")) || []
  }

  const allTodos = getTodos()
  console.log(allTodos)

  const [todoList, setTodoList] = useState(allTodos)



  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9hdrmUQ_FS4Sev-emF2mvg-s_-OPMEo-rJg&s"
              alt="logo"
              width="50"
              height="50"
              className="rounded me-2"
            />
            Todo App
          </a>
        </div>
      </nav>

      {/* Form Card */}
      <div className="container py-5">
        <div
          className="card shadow-lg border-0 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <div className="card-body p-4">
            <h2 className="text-center fw-bold mb-4">
              📝 Task Manager
            </h2>

            <div className="row g-3">
              <div className="col-md-5">
                <input onChange={(e) => {
                  setInputText(e.target.value)
                }}
                  type="text"
                  className="form-control"
                  placeholder="Enter Task"
                />
              </div>

              <div className="col-md-4">
                <select className="form-select" onClick={(e) => {
                  setInputPriority(e.target.value)
                }}>
                  <option>Select Priority</option>
                  <option>🔴 High</option>
                  <option>🟡 Medium</option>
                  <option>🟢 Low</option>
                </select>
              </div>

              <div className="col-md-3">
                <button className="btn btn-primary w-100" onClick={() => {
                  console.log(todos)
                  setTodos([...todos, { inputText, inputPriority }])
                  saveTodos()
                }}>
                  + Add Task
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Task List */}
        <div
          className="card shadow border-0 mt-4 mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="fw-bold">Your Tasks</h4>

              <input
                type="text"
                className="form-control"
                placeholder="Search Task..."
                style={{ width: "250px" }}
              />
            </div>

            {/* Task Item */}
            {
              todoList.map((todo) => {
                return <div className="border rounded p-3 mb-3 d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1">Complete React Project</h6>
                    <span className="badge bg-danger">High</span>
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
        </div>
      </div>
    </div>
  );
}


{/* <div className="border rounded p-3 mb-3 d-flex justify-content-between align-items-center">
              <div>
                <h6 className="mb-1">Complete React Project</h6>
                <span className="badge bg-danger">High</span>
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-warning btn-sm">
                  Edit
                </button>
                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </div>
            </div> */}