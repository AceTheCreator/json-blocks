import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/uicons-regular-rounded.css";
import "./styles/css/uicons-bold-rounded.css";
import "./styles/css/uicons-solid-rounded.css";
import "./styles/webfonts/DMSans-Bold.ttf";
import "./styles/webfonts/DMSans-Medium.ttf";
import "./styles/webfonts/DMSans-Regular.ttf";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
