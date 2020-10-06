import React, { useContext } from "react";
import { RequestContext } from "../../Context/requestContext";
import QueryField from "../QueryField/QueryField";
import "./Query.css";

function Query() {
  const [, , , , , , , , , , , , , , , , , , , queryObj] = useContext(
    RequestContext
  );

  return (
    <div className="query">
      {queryObj.map((i, index) => {
        return <QueryField key={index} name={i.key} />;
      })}
    </div>
  );
}

export default Query;
