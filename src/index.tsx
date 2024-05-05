import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./general.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") || document.createElement("div"),
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
