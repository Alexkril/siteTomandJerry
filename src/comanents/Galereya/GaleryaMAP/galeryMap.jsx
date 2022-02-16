import React from "react";
import clases from "./../Galereya.module.scss"

let GalText = (props) => {
    return (
        <div> {props.text} </div>
    )
};

const AddGaleryText = (props) => {
    let galeryMassegeElement=props.galeryMassegeDate
        .map((gal) => <GalText text={gal.text} id={gal.id}/>)
    return (
        <div >
            {galeryMassegeElement}
        </div>
    )
}
export default AddGaleryText;