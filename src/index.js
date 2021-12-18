import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

let ClientRevievs = [
  { id: 1, ClientReviev: "спасибо? были у вас в прощсе отлично" },
];

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App ClientRevievs={ClientRevievs} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
