import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom";
import { makeServer } from "./server";
import { StateProvider } from "./context/stateContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
    <Router>
    <App />
    </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);