import React, { useState } from "react";
import clases from './Test1.module.scss';
import AddMasseges from "./AddMassege/AddMasseges";
import { nevTestMassegeDataActionCreaator, nevTextTest1ActionCreaator }
    from './../../../reduser/testMassegeReduser';

const Test1 = (props) => {




    let addMassegeg = React.createRef();
    let addtext = () => {
        props.nevTestMassege();
    }

    let onChengeMassegeTest1 = () => {
        let text = addMassegeg.current.value
        props.onChengeMassegeTest(text)
        // let onChengeMassegeAction = nevTextTest1ActionCreaator(text)
        // props.dispatch(onChengeMassegeAction)
        // props.dispatch({ type: "NEV-TEXT-TEST1", nevText })
    }

    return (
        <div className={clases.Test1}>
            <div>
                <textarea onChange={onChengeMassegeTest1} ref={addMassegeg}
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