import React, { useState, useContext } from "react";
import { hitApi } from "../../api";
import { ResponseContext } from "../../Context/responseContext";
import "./HitBar.css";

function HitBar() {
  const [select, setSelect] = useState("GET");
  const [, setResponse] = useContext(ResponseContext);
  const hitApiHandler = async () => {
    setResponse(await hitApi());
  };
  // console.log(response);

  return (
    <div className="hitbar">
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input placeholder="End point" />
      <button onClick={hitApiHandler}>Send</button>
    </div>
  );
}

export default HitBar;
