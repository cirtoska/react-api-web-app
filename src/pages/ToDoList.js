import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { IoTrashBin } from "react-icons/io5";
import ToDoForm from "../components/ToDoForm";
import ToDoes from "./ToDoes";
import { Link } from "react-router-dom";

const ToDoList = () => {
  const getLocalStorage = () => {
    const local = localStorage.getItem("toDo");
    if (local !== null) {
      return JSON.parse(local);
    } else {
      return [];
    }
  };
  const [toDo, setToDo] = useState(getLocalStorage());

  const addToDo = (todo) => setToDo((toDo) => [...toDo, todo]);

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
    console.log(toDo);
  }, [toDo]);

  const clearList = () => {
    setToDo([]);
  };

  const markDone = (id) => {
    const newArrey = toDo.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      }
      return item;
    });
    setToDo(newArrey);
  };

  const removeItem = (id) => {
    const newList = toDo.filter((item) => item.id !== id);
    setToDo(newList);
  };

  return (
    <div>
      <NavBar />
      <h1>
        <Link to="/">Home</Link> / ToDo List
      </h1>
      <main className="todo-list">
        <ToDoForm addToDo={addToDo} />
        <div>
          <ul>
            {toDo.map((toDo, id) => {
              console.log(toDo);
              return (
                <li
                  className={toDo.done ? "done todo-item" : "todo-item"}
                  key={id}
                >
                  <p onClick={() => markDone(toDo.id)}>{toDo.name}</p>
                  {toDo.done ? (
                    <p className="icon-bin" onClick={() => removeItem(toDo.id)}>
                      <IoTrashBin />
                    </p>
                  ) : null}
                  {/* <p className="icon-bin" onClick={() => removeItem(toDo.id)}>
                      <IoTrashBin />
                  </p> */}
                </li>
              );
            })}
          </ul>
          <button onClick={clearList} className="btn">
            clear-list
          </button>
        </div>
        <ToDoes />
      </main>
      <Footer />
    </div>
  );
};

export default ToDoList;
