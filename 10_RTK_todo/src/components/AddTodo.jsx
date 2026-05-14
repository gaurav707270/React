import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";

export const AddTodo = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: ""
  });

  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo())


    if (!user.name.trim()) {
      alert("Name is required!");
      return;
    }

    if (!user.email.trim()) {
      alert("Email is required!");
      return;
    }

    if (!user.number.trim()) {
      alert("Phone number is required!");
      return;
    }

    if (!user.password.trim()) {
      alert("Password is required!");
      return;
    }


    dispatch(addTodo(user));

    alert("Form Submitted ✅");


    setUser({
      name: "",
      email: "",
      number: "",
      password: ""
    });
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <form onSubmit={addTodoHandler} className="p-4 shadow rounded bg-white w-25">

        <h3 className="mb-3">Signup Form</h3>


        <input
          type="text"
          placeholder="Full Name"
          className="form-control mb-3"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />


        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />


        <input
          type="text"
          placeholder="Phone Number"
          className="form-control mb-3"
          value={user.number}
          onChange={(e) => setUser({ ...user, number: e.target.value })}
        />


        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />


        <div className="form-check mb-3">
          <input
            type="checkbox"
            checked={check}
            onChange={() => setCheck(!check)}
            className="form-check-input"
          />
          <label className="form-check-label">
            Accept Terms & Conditions
          </label>
        </div>

        <button type="submit" className="btn btn-primary" disabled={!check}>
          Submit
        </button>
      </form>
    </div>
  );
};