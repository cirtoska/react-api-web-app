import { createContext, useMemo, useState } from "react";

const loadingContext = createContext();

function LoadingContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const value = useMemo(() => ({ loading, setLoading }), [loading]);

  return (
    <loadingContext.Provider value={value}>{children}</loadingContext.Provider>
  );
}

export { LoadingContextProvider, loadingContext };
