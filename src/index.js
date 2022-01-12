import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import state from "./state";
import { BrowserRouter } from "react-router-dom";
import { addtestmassegeData } from './state';
import { addGrumTebl } from './state';
import state2 from './state2';
import { addtestDate } from './state2';
import { addMessDialog } from './state';
import { postRev, nevTextTest1 } from './state';
import {subscribe} from "./state";

let rerenderIntareTree = (state) => {
  
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state}
          state2={state2}
          addGrumTebl={addGrumTebl}
          addtestmassegeData={addtestmassegeData}
          addtestDate={addtestDate}
          addMessDialog={addMessDialog}
          postRev={postRev}
          nevTextTest1={nevTextTest1}

        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );


}
rerenderIntareTree(state)
subscribe (rerenderIntareTree);
