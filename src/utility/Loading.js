import React from "react";
import { useContext } from "react";
import { loadingContext } from "./loadingContext";

const Loading = () => {
  const { loading } = useContext(loadingContext);
  if (!loading) return null;
  return (
    <main>
      <div className="spinner"></div>
    </main>
  );
};

export default Loading;
