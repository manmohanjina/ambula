import React, { useEffect, useRef, useState } from "react";
import "../css/todo.css";

const Todo = () => {
  const [show, setShow] = useState(false);

  const [todo, setTodo] = useState([
    { id: 1, title: "hello", description: "say hello", status: 0 },
    { id: 2, title: "hello", description: "say hello", status: 0 },
    { id: 3, title: "hello", description: "say hello", status: 1 },
    { id: 4, title: "hello", description: "say hello", status: 1 },
  ]);
  const completedTodo = todo.filter((elm) => elm.status === 1);
  const [total, setTotal] = useState(todo.length);
  const [completed, setCompleted] = useState(completedTodo.length - 1);

  const handelChange = (e) => {
    const { name, value } = e.target;

    setTodoText({
      ...todoText,
      [name]: value,
      id: Math.floor(Math.random() * 101001),
    });

    console.log(todoText);
  };

  const handleAddTodo = () => {
    if (todoText.title === "" || todoText.description === "") {
      alert("feilds cannot be empty");
      return;
    }

    setTodo([...todo, todoText]);
    setTodoText("");
    console.log(todo, "todo");

    handleAdded();
  };

  const [todoText, setTodoText] = useState({
    title: "",
    description: "",
    status: 0,
    id: 0,
  });

  const handleToggle = (ids) => {
    setTodo((prevTodo) =>
      prevTodo.map((elm) =>
        elm.id === ids.id ? { ...elm, status: elm.status === 0 ? 1 : 0 } : elm
      )
    );
  };

  const handleDelete = (ids) => {
    setTodo((prevTodo) => prevTodo.filter((elm) => elm.id !== ids.id));
  };

  const handleAdded = () => {
    setShow(false);
  };
  useEffect(() => {
    const completedTodo = todo.filter((elm) => elm.status === 1);
    setCompleted(completedTodo.length);
    setTotal(todo.length);
  }, [handleToggle, todo]);

  return (
    <div className="main-todo-container">
      <button style={{ margin: "20px" }} onClick={() => setShow(true)}>
        Add a Todo
      </button>
      <div className="stats">
        <div>
          <h3>Completed-Task-Count</h3>
          <h3 className="count-boad">{completed}</h3>
        </div>
        <div>
          <h3>Total-Task-Count</h3>
          <h3 className="count-boad">{total}</h3>
        </div>
      </div>
      <div className={show ? "show-modal" : "modal"}>
        <div className="modal-pop">
          <div
            style={{ fontSize: "40px", fontWeight: "2xl" }}
            onClick={handleAdded}
          >
            X
          </div>
          <input
            onChange={handelChange}
            name="title"
            vlaue={todoText.title}
            placeholder="Enter Title"
          />
          <input
            onChange={handelChange}
            name="description"
            value={todoText.description}
            placeholder="Enter-Description"
          />
          <select name="status" onChange={handelChange} vlaue={todoText.status}>
            <option value="">--select Value--</option>
            <option value={0}>Not-completed</option>
            <option value={1}>Completed</option>
          </select>
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </div>
      <div className="todo-grid">
        {todo.map((elm) => {
          return (
            <div className="todo-inner" key={elm.id}>
              <p style={{ fontSize: "30px" }}>{elm.title}</p>
              <p>{elm.description}</p>
              <p>{elm.status === 0 ? "Not-Completed" : "Completed"}</p>
              <div className="btn-container">
                <button onClick={() => handleToggle(elm)}>toggle</button>
                <button onClick={() => handleDelete(elm)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
