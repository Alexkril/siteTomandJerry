import React from "react";
import "./App.scss";
import Conteiners from "./comanents/Conteiners.jsx";

const App = (props) => {

  return (
    <div className="BlockContent">
      <Conteiners
        ClientRevievs={props.state.ClientRevievs}
        postRev={props.state.postRev}
        massedesData={props.state2.dialogPage.massedesData}
        DialogsData={props.state.DialogsData}
        GrumTebl={props.state.GrumTebl}
        testmassegeData={props.state.addTest1}
        addGrumTebl={props.addGrumTebl}
        onChengeMasse={props.state.onChengeMasse}
        MassegeTest3Data={props.state2.MassegeTest3Data}
        testvDate={props.state2.testvDate}
        addtestDate={props.addtestDate}
        addMessDialog={props.addMessDialog}
        addTextTest3={props.addTextTest3}
        test3OnText={props.state2}
        dispatch={props.dispatch}
      //nevTextTest1={props.nevTextTest1}
      addMessDialog={props.addMessDialog}
      nevMassegeDate={props.nevMassegeDate}
      nevNextDialog={props.nevNextDialog}
     addPageMassege={props.state2.dialogPage}

      />


    </div>
  );
};

export default App;
