import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
import Portfolio from "./portfolio";
import Header from "./components/Header";

const routing = (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById("root"));
