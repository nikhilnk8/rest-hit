import React, { useContext } from "react";
import { ResponseContext } from "../../Context/responseContext";
import "./Response.css";
function Response() {
  const [response] = useContext(ResponseContext);
  return (
    <div className="response">
      <pre>{JSON.stringify(response, undefined, 4)}</pre>
    </div>
  );
}

export default Response;
