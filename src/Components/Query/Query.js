import React, { useContext } from "react";
import { RequestContext } from "../../Context/requestContext";
import QueryField from "../QueryField/QueryField";
import "./Query.css";

function Query() {
  const [
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
    query,
    setquery,
    key,
    setKey,
    value,
    setValue,
  ] = useContext(RequestContext);
  const addKey = (e) => {
    e.preventDefault();
    setquery([...query, { key: "", value: "" }]);
  };

  return (
    <div className="query">
      {query.map((i, index) => {
        return <QueryField key={index} />;
      })}
      <button onClick={addKey}>Add More</button>
    </div>
  );
}

export default Query;
