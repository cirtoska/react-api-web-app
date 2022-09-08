import React from "react";
import useFetch from "../utility/useFetch";
import Loading from "../utility/Loading";

const ToDoes = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const { data } = useFetch(url);

  if (!data) return <Loading />;
  return (
    <div>
      <ul>
        {data.map((toDo, id) => {
          return (
            <li
              className={toDo.completed ? "done todo-item" : "todo-item"}
              key={id}
            >
              <p>{toDo.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoes;
