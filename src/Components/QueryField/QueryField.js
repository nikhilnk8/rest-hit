import React, { useContext } from "react";
import { RequestContext } from "../../Context/requestContext";
import "./QueryField.css";

function QueryField() {
  const [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    id,
    setId,
    value,
    setValue,
    queryObj,
    setQueryObj,
  ] = useContext(RequestContext);
  console.log(queryObj);
  return (
    <div className="queryField">
      <input placeholder="key" onChange={(e) => setId(e.target.value)} />
      <input placeholder="value" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => setQueryObj([...queryObj, { [id]: value }])}>
        +
      </button>
    </div>
  );
}

export default QueryField;
