import React from "react";
import clases from './test31.module.scss';
import Test311 from "./Test311.jsx/Test311";

const Test31 = (props) => {

   
    let onClicTest3 = (event) => {
        let textMass = event.target.value
        props.addtestDate(textMass);
    };

    let onchengeTest3Text = (text) => {
        props.addTextTest3(text)
    }

    return (
        <div className={clases.test31}>
            <div>test 31</div>
            <Test311 testvDate={props.testvDate} />

            <textarea onChange={onchengeTest3Text} 
                value={props.test3OnText}
                placeholder="Введите текст" ></textarea>
            <div><button onClick={onClicTest3}>push</button></div>

        </div>
    );
}
export default Test31;