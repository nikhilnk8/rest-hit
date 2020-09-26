import React, { useState, createContext } from "react";

export const ResponseContext = createContext();

export function ResponseContextProvider({ children }) {
  const [response, setResponse] = useState("");
  const [responseData, setResponseData] = useState("");
  return (
    <ResponseContext.Provider
      value={[response, setResponse, responseData, setResponseData]}
    >
      {children}
    </ResponseContext.Provider>
  );
}
