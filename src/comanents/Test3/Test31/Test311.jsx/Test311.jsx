import React from "react";
import clases from './test311.module.scss';

const Testtext=(props)=>
{
return( <div>{props.todo} {props.time} {props.day}</div> )
};

const Test311 =(props)=>{

let TestVElement=props.testvDate
.map((v)=><Testtext todo={v.todo} time={v.time} day={v.day} id={v.id}/>)

    return (
<div className={clases.test311} >
  
  {TestVElement}
</div>

    );
}
export default Test311;