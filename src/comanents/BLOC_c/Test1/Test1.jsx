import React, { useState } from "react";
import clases from './Test1.module.scss';
import AddMasseges from "./AddMassege/AddMasseges";

const Test1 = (props) => {


    let addMassegeg = React.createRef();
    let addtext = () => {
        props.dispatch({ type: "ADD-TEST-MASSEGEDATA" })

    }

    let onChengeMassege = () => {
        let nevText = addMassegeg.current.value
        let onChengeMassegeAchen = { type: "NEV-TEXT-TEST1", nevText }
        props.dispatch(onChengeMassegeAchen)
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