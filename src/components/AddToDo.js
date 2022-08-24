import React, { useState } from "react";

const AddToDo = ({ addToDo }) => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const toDo = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
    };
    addToDo(toDo);
    setText("");
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="form-component">
        <input
          type="text"
          placeholder="Add Your Item Here"
          value={text}
          onChange={handleTextChange}
        />
      </div>
    </form>
  );
};

export default AddToDo;
