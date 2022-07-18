import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App_JSX from "./App_JSX";
import App_Component from "./App_Component";
import App_Event from "./App_Event";
import App_ref from "./App_ref";
import App_Array from "./App_Array";
import App_useEffect from "./App_useEffect";
import App_useReducer from "./App_useReducer";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App_JSX /> */}
    {/* <App_Component /> */}
    {/* <App_Event></App_Event> */}
    {/* <App_ref></App_ref> */}
    <App_useEffect />
    {/* <App_useReducer></App_useReducer> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
