import React from "react";
import clases from '../Dialog/Dialogs.module.scss';
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

    let onPostText = () => {
         props.addText();
    }

    let addMassage = (e) => {
        let text = e.target.value;
        props.addNevText(text)
    }

    
    return (
        <div className={clases.Dialogs}>
            <div className={clases.DialogItems}>
                {DialogsElenent}</div>

            <div className={clases.messades}>
                {massedesElement}
                <div>
                    <textarea onChange={addMassage}
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