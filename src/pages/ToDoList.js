import React, { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { IoTrashBin } from "react-icons/io5";

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

  const toDoValue = useRef(null);

  useEffect(() => {
    toDoValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: Math.floor(Math.random() * 1000000),
      name: toDoValue.current.value,
      done: false,
    };

    setToDo((toDo) => [...toDo, todo]);
    toDoValue.current.value = "";
  };

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

  // if (!toDo) return null;
  return (
    <div>
      <NavBar />
      <h1>To Do List</h1>
      <main className="todo-list">
        <form className="search-form" onSubmit={handleSubmit}>
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
          <button onClick={clearList}>clear-list</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToDoList;
