import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import App from "./app";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
