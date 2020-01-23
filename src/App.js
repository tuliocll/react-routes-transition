import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import history from "./Services/history";

import "./Styles/global.css";

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
