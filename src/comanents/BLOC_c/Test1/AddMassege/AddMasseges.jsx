import React from "react";
import clases from './AddMasseges.module.css'

import AddLogoMasseges from "./AddLogoMasseges/AddLogoMasseges";

import imgTest from './../../../../assets/img/len.jpg'


const AddMasseges=(props)=>{
   let testmassegeData=[
{id:1, testmassege:'ghgfwe fef ef ew hghgh',},

    ] 

  let testMesElement =testmassegeData
  .map ((mas)=> <AddLogoMasseges testmassege={mas.testmassege} id= {mas.id} fotoTest={mas.fotoTest}/>)

 return (
<div className={clases.AddMasseges}>

{testMesElement}


    </div>
 );
}
export default AddMasseges;