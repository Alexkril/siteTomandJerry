import React from "react";
import clases from './../Galereya/galereya.module.scss';
import AddGaleryText from "./GaleryaMAP/GaleryMap";

const Galereya = (props) => {

    let galeryRef = React.createRef()
    let addText = () => {
        props.nevGaleryMassege()
    }
    let onChengeGaleryText = (event) => {
        let text = event.target.value
        props.nevText(text)
    }
  
    return (
        <div>
           <div className={clases.galereya}><h2>галерея</h2></div> 
            <div>
               
                <div className={clases.Galereya}>
                    <textarea ref={galeryRef} onChange={onChengeGaleryText}
                        placeholder="текст"
                        value={props.addGaleryMassege} />
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