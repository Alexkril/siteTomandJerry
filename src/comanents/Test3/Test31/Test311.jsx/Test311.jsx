import React from "react";
import clases from './test311.module.scss';

const Testtext=(props)=>
{
return( <div>{props.todo}</div> )
};
let testvDate = [
  { id:1, todo:'стрижка' },

]

const Test311 =(props)=>{


let TestVElement=testvDate
.map((v)=><Testtext todo={v.todo} id={v.id}/>)

    return (
<div className={clases.test311} >
  {TestVElement}
</div>

    );
}
export default Test311;