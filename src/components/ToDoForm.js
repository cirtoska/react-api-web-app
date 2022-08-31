import React, { useRef, useEffect } from "react";

const ToDoForm = ({ addToDo }) => {
  const toDoValue = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: Math.floor(Math.random() * 1000000),
      name: toDoValue.current.value,
      done: false,
    };
    addToDo(todo);
    toDoValue.current.value = "";
  };

  useEffect(() => {
    toDoValue.current.focus();
  }, []);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-component">
        <input type="text" placeholder="Add Your Item Here" ref={toDoValue} />
      </div>
    </form>
  );
};

export default ToDoForm;
