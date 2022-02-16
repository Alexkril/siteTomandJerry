import React from "react";
import clases from './../Galereya/Galereya.module.scss';
import AddGaleryText from "./GaleryaMAP/galeryMap";
import { nevTextGaleryCreaator, nevGaleryMassegeCreator } from "./../../reduser/galeryReduser";

const Galereya = (props) => {

    let galeryRef = React.createRef()
    let addText = () => {
        props.dispatch(nevGaleryMassegeCreator())
    }
    let onChengeGaleryText = (event) => {
        let text = event.target.value
        props.dispatch(nevTextGaleryCreaator(text))
    }
    return (
        <div>
           <div className={clases.Galereya}><h2>галерея</h2></div> 
            <div>
               
                <div className={clases.Galereya}>
                    <textarea ref={galeryRef} onChange={onChengeGaleryText}
                        placeholder="текст"
                        value={props.galeryMassegeDate.addGaleryMassege} />
                    <div>
                        <button onClick={addText}>нажать</button>
                    </div>
                </div>

                 <div className={clases.Galereya}> 
                    <AddGaleryText 
                    galeryMassegeDate={props.galeryMassegeDate} />
                </div>
            </div>

        </div>
    );
}
export default Galereya;