import React from "react";
import { connect } from "react-redux";
import { nevTextDialogActionCreator, nevMassegeDateActionCreaator } from "../../reduser/dialogReduser";
//import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

//const DialogsContainer = (props) => {

//   return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();
//                 let text = () => {
//                     store.dispatch(nevMassegeDateActionCreaator())
//                 }

//                 let addMassage = (text) => {

//                     let nevTextDialogAction = nevTextDialogActionCreator(text)
//                     store.dispatch(nevTextDialogAction);
//                 }

//                 return (
//                     <Dialogs
//                         addText={text}
//                         addNevText={addMassage}
//                         massedesData={state.dialogPage.massedesData}
//                         addPageMassege={state.dialogPage.addPageMassege}
//                         DialogsData={state.dialogPage.DialogsData}
//                     />
//                 )
//             }
//             }
//         </StoreContext.Consumer>

//     )
// }
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
            let nevTextDialogAction = nevTextDialogActionCreator(text)
            dispatch(nevTextDialogAction);
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;