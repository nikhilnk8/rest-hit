import React, { useState, useContext } from "react";
import { hitApi } from "../../api";
import { ResponseContext } from "../../Context/responseContext";
import "./HitBar.css";

function HitBar() {
  const [select, setSelect] = useState("GET");
  const [, setResponse, , setResponseData] = useContext(ResponseContext);
  const [url, setUrl] = useState("https://api.github.com/users/1");
  // send button handler
  const hitApiHandler = async (link) => {
    setResponse(await hitApi(link));
    let data = await hitApi(link);
    setResponseData(data.data);
  };

  return (
    <div className="hitbar">
      <select value={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input
        placeholder="End point"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      <button onClick={() => hitApiHandler(url)}>Send</button>
    </div>
  );
}

export default HitBar;
