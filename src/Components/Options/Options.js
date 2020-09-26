import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Body from "../Body/Body";
import Header from "../Header/Header";
import Query from "../Query/Query";
import "./Options.css";

function Options() {
  return (
    <Router>
      <div className="options">
        <div className="options__list">
          <ul>
            <Link to="/query">
              <li>QUERY</li>
            </Link>
            <Link to="/">
              <li>BODY</li>
            </Link>
            <Link to="/header">
              <li>HEADER</li>
            </Link>
          </ul>
        </div>
        <Switch>
          <Route path="/" component={Body} exact />
          <Route path="/query" component={Query} />
          <Route path="/header" component={Header} />
        </Switch>
      </div>
    </Router>
  );
}

export default Options;
