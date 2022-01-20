import React from "react";
import clases from './test31.module.scss';
import Test311 from "./Test311.jsx/Test311";

const Test31 = (props) => {

    let Box = React.createRef();
    let But = () => {
        let Mass = Box.current.value
        props.addtestDate(Mass);
    };

    let test3Text = () => {
        props.addTextTest3(Box.current.value)
    }
debugger
    return (
        <div className={clases.test31}>
            <div>test 31</div>
            <Test311 testvDate={props.testvDate} />

            <textarea onChange={test3Text} ref={Box}
                value={props.test3OnText}
                placeholder="Введите текст" ></textarea>
            <div><button onClick={But}>push</button></div>

        </div>
    );
}
export default Test31;