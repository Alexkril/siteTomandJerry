import React, { useState } from "react";
import clases from './Test1.module.scss';
import AddMasseges from "./AddMassege/AddMasseges";
import { nevTestMassegeDataActionCreaator, nevTextTest1ActionCreaator } from "../../../state";

const Test1 = (props) => {




    let addMassegeg = React.createRef();
    let addtext = () => {
        props.dispatch(nevTestMassegeDataActionCreaator())
    }

    let onChengeMassege = () => {

        let text = addMassegeg.current.value
        let onChengeMassegeAction = nevTextTest1ActionCreaator(text)
        props.dispatch(onChengeMassegeAction)
        // props.dispatch({ type: "NEV-TEXT-TEST1", nevText })
    }

    return (
        <div className={clases.Test1}>
            <div>
                <textarea onChange={onChengeMassege} ref={addMassegeg}
                    placeholder="Введите текст" value={props.testmassegeData.nevTest1}></textarea>
                <div>
                    <button onClick={addtext}  >add</button>
                </div>
            </div>

            <AddMasseges testmassegeData={props.testmassegeData}

            />
        </div>
    )
}

export default Test1;