import React, { useContext } from "react";
import { HitApi } from "../../api";
import { RequestContext } from "../../Context/requestContext";
import { ResponseContext } from "../../Context/responseContext";
import "./HitBar.css";

function HitBar() {
  const [, setResponse, , setResponseData] = useContext(ResponseContext);
  const [
    ,
    ,
    ,
    ,
    ,
    select,
    setSelect,
    url,
    setUrl,
    body,
    ,
    headers,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    queryObj,
  ] = useContext(RequestContext);

  console.log(body);
  // send button handler
  const hitApiHandler = async (method, headers, body, url, queryObj) => {
    setResponse(await HitApi(method, headers, body, url, queryObj));
    let data = await HitApi(method, headers, body, url, queryObj);
    setResponseData(data.data ? data.data : data);
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
      <button
        onClick={() => hitApiHandler(select, headers, body, url, queryObj)}
      >
        Send
      </button>
    </div>
  );
}

export default HitBar;
