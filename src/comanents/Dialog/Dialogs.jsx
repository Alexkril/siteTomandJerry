import React from "react";
import clases from '../Dialog/Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import { nevTextDialogActionCreaator, nevMassegeDateActionCreaator } from "../../state";

// const DialogItem = (props) => {

//     let path = "/Dialogs/" + props.id;
//     return (
//         <div className={clases.Dialog + " " + clases.active}>
//             <img src={ImgSm} className={clases.imgIcon} alt="" />
//             <NavLink to={path}> {props.name} </NavLink>
//         </div>

//     )
// }
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
    let text = () => {
        props.dispatch(nevMassegeDateActionCreaator())

    }

    let addMassage = () => {
        let text = Ad.current.value;
        let nevTextDialogAction = nevTextDialogActionCreaator(text)
        props.dispatch(nevTextDialogAction);
    }

debugger
    return (
        <div className={clases.Dialogs}>
            <div className={clases.DialogItems}>
                {DialogsElenent}</div>

            <div className={clases.messades}>
                {massedesElement}
                <div>
                    <textarea ref={Ad} onChange={addMassage}
                        value={props.addPageMassege.addPageMassege}
                        placeholder="текст"
                    />
                    <div>
                        <button onClick={text}>отправить сообщение</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Dialogs;