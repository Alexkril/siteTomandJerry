import React, { useState } from "react";
import { nevTestMassegeDataActionCreaator, nevTextTest1ActionCreaator }
    from '../../../reduser/testMassegeReduser';
import StoreContext from "../../../storeContext";
import Test1 from "./Test1";

const Test1Container = (props) => {




    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = props.store.getState();

                    let addtext = () => {
                        props.dispatch(nevTestMassegeDataActionCreaator())
                    }

                    let onChengeMassege = (text) => {
                        let onChengeMassegeAction = nevTextTest1ActionCreaator(text)
                        props.dispatch(onChengeMassegeAction)
                    }

                    return (
                        <Test1
                            nevTestMassege={addtext}
                            onChengeMassegeTest={onChengeMassege}
                            nevTest1={props.nevTest1}
                            testmassegeData={props.testmassegeData} />)
                }
            }
        </StoreContext.Consumer>


    )
}

export default Test1Container;