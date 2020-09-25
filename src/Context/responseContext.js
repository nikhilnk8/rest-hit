import React, { useState, createContext } from "react";

export const ResponseContext = createContext();

export function ResponseContextProvider({ children }) {
  const [response, setResponse] = useState("");
  return (
    <ResponseContext.Provider value={[response, setResponse]}>
      {children}
    </ResponseContext.Provider>
  );
}
