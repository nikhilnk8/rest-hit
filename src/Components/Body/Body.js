import React, { useContext } from "react";
import { RequestContext } from "../../Context/requestContext";
import "./Body.css";

function Body() {
  const [, , , , , , , , , body, setBody] = useContext(RequestContext);
  console.log(body);
  return (
    <div className="body">
      <textarea onChange={(e) => setBody(e.target.value)} value={body} />
    </div>
  );
}

export default Body;
