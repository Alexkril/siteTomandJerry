import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import store from "./state";
import { BrowserRouter } from "react-router-dom";
import state2 from './state2';
import {subscribe2} from "./state2";
import {addTextTest3, addtestDate} from "./state2";

let rerenderIntareTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      
        <App state={state}
          state2={state2}
          addGrumTebl={store.addGrumTebl}
          addtestmassegeData={store.addtestmassegeData.bind(store)}
          addtestDate={addtestDate}
          addMessDialog={store.addMessDialog}
          postRev={store.postRev}
          nevTextTest1={store.nevTextTest1.bind(store)}
          addTextTest3 ={addTextTest3}
          
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
rerenderIntareTree(store.getState ())
store.subscribe(rerenderIntareTree);
subscribe2(rerenderIntareTree);
