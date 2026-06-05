import React, { useEffect, useState } from "react";
// ham react maise react useEffect or useState ko import karrger


export default function App() {
  // ham ne default app component banaaliyaa hai
  const [inputText, setInputText] = useState("");
  // useState kaa use kar ke hamne userinput text ke liyaa ek state banaaliya hai
  const [inputPriority, setInputPriority] = useState("");
  // asaa hi ham ne firse userPriority ke liya bhi state baanaa liyaa hai 


  const [todos, setTodos] = useState(
    // hamne todo naam ka ek state banaaliya hai or use ke aadhar defult value localstorge ke adhhar ke ham ne todos ko get kar ke todo ko defult value de diyaa hai
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    // useEffect kaa use kar ke localStorge mai ham todos key par ham todo ko storge kar rahaa hai or jabbhi componenet rerender hogaa jab useEffects call hogaa 
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    // hamne ek function banaayaa hai or uske aadhar ek condition lagaai hai ooo cadition bol rahiihai inputText khali hai yaa inputPriority khali hai to ye alert ke aadhar ki value print hoggiii
    if (!inputText || !inputPriority) {
      alert("Please enter task and priority");
      return;
    }

    const newTodo = {
      // hamne wk newTodo naam se ek varable bannaya uske aadhar object bannake ID diya id mai Date.noe() naam ka function kaa use kar ke ek id diyaa inputText or inputPriority  set kar diyaa 
      text: inputText,
      priority: inputPriority,
    };


    setTodos([...todos, newTodo]);
    // setTodos naam ke function kaa use kar ke ham ne todos ko update kiyaa setTodos ke aadhar ek array liyaa uske aadhar todos ko spread function spread kiyaa or newTodo namm ke varable ki value add kar diyaa

    setInputText("");
    setInputPriority("");
    // uske baad inputText or inputPriorty ko khali kar diyaa hai
  };

  const deleteTodo = (i) => {
    // ham ne deleteTodo naam ka function banaayaa id naam  attrabut diyaa .
    const updatedTodos = todos.filter((todo) => {
      todos[i] !== todo
    });
    // updateTodos naam ke variable ke adhar todos ke upar todos.filter method lagaa diyaa or ek cadition lagaai usse hame ek arry maise ek ek todo naam kaa object milaa todo.id kar ke hamne !== id ki hambe click kiya or todos ke aadhar sab todos mai uski bhi id match huuii uskoo shodke sab todo ko return kar dataa hai
    setTodos(updatedTodos);
    // fir setTYodos mai updateTodos bheje detaa haii
  };

  const [isUpdate, setIsUpdate] = useState(false)

  const [index, setIndex] = useState()

  const updateTodo = (i) => {
    setInputText(todos[i].text)
    setInputPriority(todos[i].priority)

    setIndex(i)
    console.log(index)
  }

  const editTodo = () => {
    const allTodos = [...todos]

    allTodos[index].text = inputText
    allTodos[index].priority = inputPriority
  }

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
                  onClick={() => {
                    isUpdate ? editTodo() : addTodo()
                    setIsUpdate(false)
                  }}
                >
                  {isUpdate ? "UpdateTodo" : "+AddTodo"}
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
              todos.map((todo, i) => (
                <div key={i}

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

                  <div >
                    <button
                      className="btn btn-warning btn-sm mx-2"
                      onClick={() => {
                        updateTodo(i)
                        setIsUpdate(true)
                      }}
                    >
                      Update
                    </button>

                    <button
                      className="btn btn-danger btn-sm mx-2"
                      onClick={() => deleteTodo(i)}
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