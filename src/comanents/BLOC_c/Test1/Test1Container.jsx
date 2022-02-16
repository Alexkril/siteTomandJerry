import React, { useState } from "react";
import { nevTestMassegeDataActionCreaator, nevTextTest1ActionCreaator }
    from '../../../reduser/testMassegeReduser';
import Test1 from "./Test1";

const Test1Container = (props) => {


    let state = props.store.getState();

    let addtext = () => {
        props.dispatch(nevTestMassegeDataActionCreaator())
    }

    let onChengeMassege = (text) => {
        let onChengeMassegeAction = nevTextTest1ActionCreaator(text)
        props.dispatch(onChengeMassegeAction)
    }

    return (<Test1 
        nevTestMassege={addtext}
        onChengeMassegeTest={onChengeMassege}
        nevTest1={props.nevTest1}
        testmassegeData={props.testmassegeData} />
    )
}

export default Test1Container;