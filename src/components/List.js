import React from "react";
import { FaTrash } from "react-icons/fa";

const List = ({ list, removeItem }) => {
  console.log(list);
  return (
    <div>
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
    </div>
  );
};

export default List;
