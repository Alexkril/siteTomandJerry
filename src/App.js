import React from "react";
import "./App.css";
import Conteiners from "./comanents/Conteiners.jsx";

const App = (props) => {
  return (
    <div className="BlockContent">
      <Conteiners ClientRevievs={props.ClientRevievs}/>
    </div>
  );
};

export default App;
