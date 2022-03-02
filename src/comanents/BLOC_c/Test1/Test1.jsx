import React, { useState } from "react";
import clases from './Test1.module.scss';
import AddMasseges from "./AddMassege/AddMasseges";

const Test1 = (props) => {




    let addMassegeg = React.createRef();
    let addtext = () => {
        props.nevTestMassege();
    }

    let onChengeMassegeTest1 = () => {
        let text = addMassegeg.current.value
        props.onChengeMassegeTest(text)
       
    }

    return (
        <div className={clases.Test1}>
            <div>
                <textarea onChange={onChengeMassegeTest1} ref={addMassegeg}
                    placeholder="Введите текст" value={props.nevTest1}></textarea>
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