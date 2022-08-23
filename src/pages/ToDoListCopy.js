import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { FaTrash } from "react-icons/fa";
import Alert from "../components/Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!toDo) {
      showAlert(true, "danger", "please enter value");
    } else {
      showAlert(true, "success", "item addet to the list");
      const newItem = { id: new Date().getTime().toString(), title: toDo };
      setList([...list, newItem]);
      setToDo("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <div>
      <NavBar />
      <h1>To Do List</h1>
      <main>
        <form onSubmit={handleSubmit} className="search-form">
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <div className="form-component">
            <input
              type="text"
              placeholder="Add Your Item Here"
              value={toDo}
              onChange={(e) => setToDo(e.target.value)}
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="container">
          {list.map((item) => {
            const { id, title } = item;
            return (
              <article key={id}>
                <p className="title">{title}</p>
                <button onClick={() => removeItem(id)}>
                  <FaTrash />
                </button>
              </article>
            );
          })}
          <button className="btn" onClick={clearList}>
            clear items
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToDoList;
