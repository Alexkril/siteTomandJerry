import React from "react";
import { nevTextDialogActionCreator, nevMassegeDateActionCreaator } from "../../reduser/dialogReduser";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
debugger
    let state = props.store.getState();


    let text = () => {
        props.store.dispatch(nevMassegeDateActionCreaator())
    }

    let addMassage = (text) => {
        let nevTextDialogAction = nevTextDialogActionCreator(text)
        props.store.dispatch(nevTextDialogAction);
    }

    return (<Dialogs
        addText={ text}
        addNevText={addMassage}
        massedesData={props.massedesData}
        addPageMassege={props.addPageMassege}
    />

    )
}
export default DialogsContainer;