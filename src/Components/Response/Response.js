import React, { useContext } from "react";
import { ResponseContext } from "../../Context/responseContext";
import "./Response.css";
function Response() {
  const [response, , responseData] = useContext(ResponseContext);
  return (
    <div className="response">
      <div className="response__data">
        <p>Response Data</p>
        <pre>{JSON.stringify(responseData, undefined, 4)}</pre>
      </div>
      <div className="response__data response__headers">
        <p>Response Headers</p>
        <pre>{JSON.stringify(response.headers, undefined, 4)}</pre>
      </div>
    </div>
  );
}

export default Response;
