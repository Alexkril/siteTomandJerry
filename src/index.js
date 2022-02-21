import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import store from "./redaxStore";
import { BrowserRouter } from "react-router-dom";
import StoreContext from "./storeContext"

let rerenderIntareTree = (state) => {
 
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
     < StoreContext.Provider value={store}>
        <App state={state}
          addGrumTebl={store.addGrumTebl}
          dispatch={store.dispatch.bind(store)}
          addMessDialog={store.addMessDialog}
          postRev={store.postRev}
          store={store}
        />

         
          
        
        </StoreContext.Provider>
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
