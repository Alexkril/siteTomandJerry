import React from "react";
import "./App.scss";
import 'antd/dist/antd.css'
import Conteiners from "./comanents/Conteiners.jsx";
import HederUser from "./comanents/header/HederUser";

const App = (props) => {

  return (
    <div className="BlockContent">
      <Conteiners />
      <HederUser />
    </div>
  );
};

export default App;
