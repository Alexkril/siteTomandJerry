import React, { useState } from "react";
import { connect } from "react-redux";
import { nevTestMassegeDataActionCreaator, nevTextTest1ActionCreaator }
    from '../../../reduser/testMassegeReduser';
//import StoreContext from "../../../storeContext";
import Test1 from "./Test1";

// const Test1Container = (props) => {




//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();

//                 let addtext = () => {
//                    store.dispatch(nevTestMassegeDataActionCreaator())
//                 }

//                 let onChengeMassege = (text) => {
//                     let onChengeMassegeAction = nevTextTest1ActionCreaator(text)
//                     store.dispatch(onChengeMassegeAction)
//                 }

//                 return (

//                     <Test1
//                         nevTestMassege={addtext}
//                         onChengeMassegeTest={onChengeMassege}
//                         nevTest1={state.addTest1.nevTest1}
//                         testmassegeData={state.addTest1.testmassegeData} />)
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps =(state)=>{
    return{
        nevTest1: state.addTest1.nevTest1,
        testmassegeData:state.addTest1.testmassegeData
    }
};
let mapDispatchToProps =(dispatch)=>{
    return{
        nevTestMassege: ()=>{
            dispatch(nevTestMassegeDataActionCreaator())
        },
        onChengeMassegeTest:(text)=>{
            let onChengeMassegeAction = nevTextTest1ActionCreaator(text)
            dispatch(onChengeMassegeAction)
        }
    }
}
const Test1Container = connect(mapStateToProps, mapDispatchToProps)(Test1)

export default Test1Container;