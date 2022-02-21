import React from "react";
import { nevTextGaleryCreaator, nevGaleryMassegeCreator } from "../../reduser/galeryReduser";
import StoreContext from "../../storeContext";
import Galereya from "./Galereya";

const GalereyaContainer = (props) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addText = () => {
                    props.dispatch(nevGaleryMassegeCreator())
                }
                let onChengeGaleryText = (text) => {

                    props.dispatch(nevTextGaleryCreaator(text))
                }
                //       console.log(state)

                return (
                    <Galereya
                        nevText={onChengeGaleryText}
                        nevGaleryMassege={addText}
                        addGaleryMassege={state.galereya.addGaleryMassege}
                        galeryMassegeDate={state.galereya.galeryMassegeDate}
                    />)
            }
            }
        </StoreContext.Consumer>
    );
}
export default GalereyaContainer;