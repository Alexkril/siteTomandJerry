import React, { useState } from "react";
import clases from './Test1.module.scss';
import AddMasseges from "./AddMassege/AddMasseges";

const Test1 = (props) => {
    

    let addMassegeg = React.createRef();
    let addtext = () => {
        props.addtestmassegeData(addMassegeg.current.value)
        props.testmassegeData.nevTest1 = ''
    }

    let onChengeMassege = () => {
        props.nevTextTest1(addMassegeg.current.value)

    }
    let onChengeMasse = () => {
        let Text2 = AddMassegeg.current.value;
        props.nevTextTest1(Text2);
       
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