import React from "react";
import "./QueryField.css";

function QueryField() {
  return (
    <div className="queryField">
      <input placeholder="key" />
      <input placeholder="value" />
      <button>+</button>
    </div>
  );
}

export default QueryField;
