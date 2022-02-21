import React from "react";
import clases from './../../comanents/Test3/test3.module.scss';
import Test31Container from "./Test31/Test31Container";



const Test3 = (props) => {
    
    return (
        <div className={clases.test3}>

            <div>
                <h3>test3</h3>
                <Test31Container
                    testvDate={props.testvDate}
                    addtestDate={props.addtestDate}
                    test3OnText={props.test3OnText}
                    addTextTest3 ={props.addTextTest3}
                    test3OnText={props.test3OnText}
                />
            </div>

        </div>
    );
}
export default Test3;