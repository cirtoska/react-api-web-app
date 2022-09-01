import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../utility/context";

const TestContextCopy = () => {
  const { balls } = useContext(Context);

  return (
    <div>
      <h1>Balls: {balls}</h1>
      <Link to={"/testcontext"}>New Value</Link>
    </div>
  );
};

export default TestContextCopy;
