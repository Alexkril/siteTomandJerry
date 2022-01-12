import React from "react";
import c from './test2.module.css'
import Test21 from "./Test21/Test21";
import TestForm from "./test2form/TestForm";

const Test2 = (props)=>{

    return(
<div className={c.test2}>
    <TestForm addGrumTebl={props.addGrumTebl}/>
    <Test21 GrumTebl={props.GrumTebl} />
</div>
    );
}
export default Test2;