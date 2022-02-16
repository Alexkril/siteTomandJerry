import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import store from "./redaxStore";

import { BrowserRouter } from "react-router-dom";
import state2 from './state2';
import {subscribe2} from "./state2";
import {addTextTest3, addtestDate,  } from "./state2";

let rerenderIntareTree = (state) => {
 
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      
        <App state={state}
          state2={state2}
          addGrumTebl={store.addGrumTebl}
          dispatch={store.dispatch.bind(store)}
          addtestDate={addtestDate}
          addMessDialog={store.addMessDialog}
          postRev={store.postRev}
          addTextTest3 ={addTextTest3}
          addMessDialog={state2.addMessDialog}
          store={store}
          
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
rerenderIntareTree(store.getState ())
store.subscribe(()=>{
let state =store.getState ()
  rerenderIntareTree (state)
}
);
