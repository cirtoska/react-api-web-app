import React, { useState, useRef, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const ToDoList = () => {
  const [toDo, setToDo] = useState([]);
  const [list, setList] = useState(getLocalStorage());
  const toDoValue = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toDo);
    if (toDo) {
      setToDo((toDo) => [...toDo, toDoValue.current.value]);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: toDo };

      setList([...list, newItem]);
      setToDo("");
    }
  };
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  if (!toDo) return null;
  return (
    <div>
      <NavBar />
      <h1>To Do List</h1>
      <main>
        <form onSubmit={handleSubmit} className="search-form">
          <div className="form-component">
            <input
              type="text"
              placeholder="Add Your Item Here"
              ref={toDoValue}
            />
            {/* <button className="btn" type="submit">
              Submit
            </button> */}
          </div>
        </form>
        <div className="container">
          <ul>
            {toDo.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToDoList;
