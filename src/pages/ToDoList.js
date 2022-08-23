import React, { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaTrash } from "react-icons/fa";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const ToDoList = () => {
  const [toDo, setToDo] = useState(getLocalStorage());

  const toDoValue = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toDo);

    setToDo((toDo) => [...toDo, toDoValue.current.value]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(toDo));
  }, [toDo]);

  const clearList = () => {
    setToDo([]);
  };

  const removeItem = (index) => {
    setToDo(toDo.filter((item) => item.index !== index));
  };

  if (!toDo) return null;
  return (
    <div>
      <NavBar />
      <h1>To Do List</h1>
      <main className="todo-list">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="form-component">
            <input
              type="text"
              placeholder="Add Your Item Here"
              ref={toDoValue}
            />
          </div>
        </form>
        <div>
          <ul>
            {toDo.map((item, index) => {
              return (
                <li className="todo-item" key={index}>
                  <p>{item}</p>
                  <button onClick={() => removeItem(index)}>
                    <FaTrash />
                  </button>
                </li>
              );
            })}
          </ul>
          <button onClick={clearList}>clear-list</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToDoList;
