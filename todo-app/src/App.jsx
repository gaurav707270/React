import React, { useEffect, useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [inputPriority, setInputPriority] = useState("");

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (!inputText || !inputPriority) {
      alert("Please enter task and priority");
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      priority: inputPriority,
    };

    setTodos([...todos, newTodo]);

    setInputText("");
    setInputPriority("");
  };

  const deleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

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

      {/* Form */}
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Task"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <select
                  className="form-select"
                  value={inputPriority}
                  onChange={(e) => setInputPriority(e.target.value)}
                >
                  <option value="">Select Priority</option>
                  <option value="High">🔴 High</option>
                  <option value="Medium">🟡 Medium</option>
                  <option value="Low">🟢 Low</option>
                </select>
              </div>

              <div className="col-md-3">
                <button
                  className="btn btn-primary w-100"
                  onClick={addTask}
                >
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
            <h4 className="fw-bold mb-3">Your Tasks</h4>

            {todos.length === 0 ? (
              <p className="text-center text-muted">
                No Tasks Available
              </p>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="border rounded p-3 mb-3 d-flex justify-content-between align-items-center"
                >
                  <div>
                    <h6 className="mb-1">{todo.text}</h6>

                    <span
                      className={`badge ${todo.priority === "High"
                          ? "bg-danger"
                          : todo.priority === "Medium"
                            ? "bg-warning text-dark"
                            : "bg-success"
                        }`}
                    >
                      {todo.priority}
                    </span>
                  </div>

                  <div>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteTask(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}