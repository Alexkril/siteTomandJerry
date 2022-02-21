import React from "react";
import "./App.scss";
import Conteiners from "./comanents/Conteiners.jsx";

const App = (props) => {

  return (
    <div className="BlockContent">
      <Conteiners
        ClientRevievs={props.state.ClientRevievs}
        postRev={props.state.postRev}
        massedesData={props.state.dialogPage.massedesData}
        DialogsData={props.state.DialogsData}
        GrumTebl={props.state.GrumTebl}
        testmassegeData={props.state.addTest1}
        addGrumTebl={props.addGrumTebl}
        onChengeMasse={props.state.onChengeMasse}
        MassegeTest3Data={props.MassegeTest3Data}
        testvDate={props.testvDate}
        addtestDate={props.addtestDate}
        addMessDialog={props.addMessDialog}
        addTextTest3={props.addTextTest3}
        test3OnText={props.test3OnText}
        dispatch={props.dispatch}
        //nevTextTest1={props.nevTextTest1}
        addMessDialog={props.addMessDialog}
        nevMassegeDate={props.nevMassegeDate}
        nevNextDialog={props.nevNextDialog}
        addPageMassege={props.state.dialogPage}
        galeryMassegeDate={props.state.galereya}
        addGaleryMassege={props.state.addGaleryMassege}
        store={props.store}
      />


    </div>
  );
};

export default App;
