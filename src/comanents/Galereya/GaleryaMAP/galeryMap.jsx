import React from "react";
import c from "./../Galereya.module.scss"

let GalText = (props) => {
    return (
        <div> {props.text} </div>
    )
};

const AddGaleryText = (props) => {
    let galeryMassegeElement=props.galeryMassegeDate
        .map((g) => <GalText text={g.text} key={g.id} id={g.id}/>)
    return (
        <div className={c.galeryMap} >
            {galeryMassegeElement}
        </div>
    )
}
export default AddGaleryText;