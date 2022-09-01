import React from "react";
import { createContext, useEffect, useMemo, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [balls, setBalls] = useState(5);

  useEffect(() => {
    console.log("balls", balls);
  }, [balls]);

  const changeBalls = (n) => {
    setBalls(n);
  };

  const value = useMemo(
    () => ({
      setBalls,
      balls,
      changeBalls,
    }),
    [balls]
  );

  return (
    <Context.Provider value={{ value, loading }}>{children}</Context.Provider>
  );
}

export { ContextProvider, Context };
