import React, { useState, createContext } from "react";
import { HitApi } from "../api";

export const RequestContext = createContext();

export function RequestContextProvider({ children }) {
  const [endpoint, setendpoint] = useState("");
  const [reqBody, setreqBody] = useState("");
  const [select, setSelect] = useState("GET");
  const [url, setUrl] = useState("https://reqres.in/api/users");
  const [body, setBody] = useState();
  const [headers, setHeaders] = useState();
  return (
    <RequestContext.Provider
      value={[
        endpoint,
        setendpoint,
        reqBody,
        setreqBody,
        HitApi,
        select,
        setSelect,
        url,
        setUrl,
        body,
        setBody,
        headers,
        setHeaders,
      ]}
    >
      {children}
    </RequestContext.Provider>
  );
}
