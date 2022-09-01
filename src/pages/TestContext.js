import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../utility/context";

const TestContextCopy = () => {
  const { setBalls, changeBalls } = useContext(Context);

  useEffect(() => {
    setBalls(15);
  }, []);
  return (
    <h1>
      <Link to={"/testcontext1"}>Set value</Link>
    </h1>
  );
};

export default TestContextCopy;
