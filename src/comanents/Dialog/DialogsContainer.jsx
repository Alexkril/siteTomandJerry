import React from "react";
import { nevTextDialogActionCreator, nevMassegeDateActionCreaator } from "../../reduser/dialogReduser";
import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = props.store.getState();
                    let text = () => {
                        store.dispatch(nevMassegeDateActionCreaator())
                    }

                    let addMassage = (text) => {
                        let nevTextDialogAction = nevTextDialogActionCreator(text)
                        store.dispatch(nevTextDialogAction);
                    }
                    return (
                        <Dialogs
                            addText={text}
                            addNevText={addMassage}
                            massedesData={props.massedesData}
                            addPageMassege={props.addPageMassege}
                        />
                    )
                }
            }
        </StoreContext.Consumer>

    )
}
export default DialogsContainer;