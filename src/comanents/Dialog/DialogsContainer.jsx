import React from "react";
import { connect } from "react-redux";
import { nevTextDialogActionCreator, nevMassegeDateActionCreaator } from "../../reduser/dialogReduser";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        massedesData: state.dialogPage.massedesData,
        addPageMassege: state.dialogPage.addPageMassege,
        DialogsData: state.dialogPage.DialogsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addText: () => {
            dispatch(nevMassegeDateActionCreaator())
        },
        
        addNevText: (text) => {
            dispatch(nevTextDialogActionCreator(text));
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;