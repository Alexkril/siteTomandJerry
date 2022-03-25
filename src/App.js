import React from "react";
import "./App.scss";
import 'antd/dist/antd.css'
import Conteiners from "./comanents/Conteiners.jsx";

const App = (props) => {

  return (
    <div className="BlockContent">
      <Conteiners
        
        store={props.store}
      />


    </div>
  );
};

export default App;
