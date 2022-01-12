import React from "react";
import clases from './test31.module.scss';
import Test311 from "./Test311.jsx/Test311";

const Test31 = (props) => {

    let Box = React.createRef();
    let But = () => {
        
        let Mass = Box.current.value
        props.addtestDate(Mass);
        Box.current.value='';
    }
debugger
    return (
        <div className={clases.test31}>
            <div>test 31</div>
            <Test311 TestvDate={props.TestvDate}/>


            <textarea ref={Box} ></textarea>
            <div><button onClick={But}>b</button></div>

        </div>
    );
}
export default Test31;