import React from "react";
import "./App.scss";
import Conteiners from "./comanents/Conteiners.jsx";

const App = (props) => {
  return (
    <div className="BlockContent">
      <Conteiners
        ClientRevievs={props.state.ClientRevievs}
        postRev={props.state.postRev}
        massedesData={props.state.massedesData}
        DialogsData={props.state.DialogsData}
        GrumTebl={props.state.GrumTebl}
        testmassegeData={props.state.addTest1}
        addGrumTebl={props.addGrumTebl}
        addtestmassegeData={props.addtestmassegeData}
        onChengeMasse={props.state.onChengeMasse}
        MassegeTest3Data={props.state2.MassegeTest3Data}
        testvDate={props.state2.testvDate}
        addtestDate={props.addtestDate}
        addMessDialog={props.addMessDialog}
        nevTextTest1={props.nevTextTest1}
        addTextTest3 ={props.addTextTest3}
        test3OnText={props.state2}
      />


    </div>
  );
};

export default App;
