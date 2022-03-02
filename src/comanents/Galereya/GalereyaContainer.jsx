import React from "react";
import { connect } from "react-redux";
import { nevTextGaleryCreaator, nevGaleryMassegeCreator } from "../../reduser/galeryReduser";
import Galereya from "./Galereya";

// const GalereyaContainer = (props) => {


//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();

//                 let addText = () => {
//                     store.dispatch(nevGaleryMassegeCreator())
//                 }
//                 let onChengeGaleryText = (text) => {

//                     store.dispatch(nevTextGaleryCreaator(text))
//                 }


//                 return (
//                     <Galereya
//                         nevText={onChengeGaleryText}
//                         nevGaleryMassege={addText}
//                         addGaleryMassege={state.galereya.addGaleryMassege}
//                         galeryMassegeDate={state.galereya.galeryMassegeDate}
//                     />)
//             }
//             }
//         </StoreContext.Consumer>
//     );
// }



let mapStateToProps = (state) => {
    return {
        addGaleryMassege: state.galereya.addGaleryMassege,
        galeryMassegeDate: state.galereya.galeryMassegeDate
    }
};

let mapDispatchToProps = (dispatch) => {

    return {
        nevText: (text) => {
            dispatch(nevTextGaleryCreaator(text))
        },

        nevGaleryMassege: () => {
            dispatch(nevGaleryMassegeCreator())
        }
    }
}

const GalereyaContainer = connect (mapStateToProps, mapDispatchToProps)(Galereya)

export default GalereyaContainer;