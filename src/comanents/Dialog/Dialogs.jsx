import React from "react";
import clases from '../Dialog/Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";

const Massedes = (props) => {
    return (
        <div className={clases.messade}>
            {props.massedes}
        </div>
    );
}


const Dialogs = (props) => {

    let massedesElement = props.massedesData
        .map((massedges) => <Massedes massedes={massedges.massedes} />)

    let DialogsElenent = props.DialogsData
        .map((Dialog) => <DialogItem name={Dialog.name} id={Dialog.id} />)

    let Ad = React.createRef();
    let onPostText = () => {
         props.addText();
    }

    let addMassage = () => {
        let text = Ad.current.value;
        props.addNevText(text)
    }

    
    return (
        <div className={clases.Dialogs}>
            <div className={clases.DialogItems}>
                {DialogsElenent}</div>

            <div className={clases.messades}>
                {massedesElement}
                <div>
                    <textarea ref={Ad} onChange={addMassage}
                        value={props.addPageMassege}
                        placeholder="текст"
                    />
                    <div>
                        <button onClick={onPostText}>отправить сообщение</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Dialogs;