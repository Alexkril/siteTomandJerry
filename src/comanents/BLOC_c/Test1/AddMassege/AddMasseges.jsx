import React from "react";
import clases from './AddMasseges.module.scss'
import AddLogoMasseges from "./AddLogoMasseges/AddLogoMasseges";


const AddMasseges = (props) => {

   let testMesElement = props.testmassegeData.map((item) => {
      return <span key={item.id} style={{ display: 'flex' }} >
         <AddLogoMasseges />
         <span >{item.testmassege}</span>
      </span>
   })

   return (
      <div className={clases.AddMasseges}>
         {testMesElement}
      </div>
   );
}
export default AddMasseges;