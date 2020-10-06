import React, { useContext } from "react";
import { RequestContext } from "../../Context/requestContext";
import "./Header.css";

function Header() {
  const [, , , , , , , , , , , headers, setHeaders] = useContext(
    RequestContext
  );
  return (
    <div className="header">
      <textarea onChange={(e) => setHeaders(e.target.value)} value={headers} />
    </div>
  );
}

export default Header;
