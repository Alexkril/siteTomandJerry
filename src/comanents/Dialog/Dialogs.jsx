import React from "react";
import { NavLink } from "react-router-dom";
import clases from '../Dialog/Dialogs.module.css';
import ImgSm from '../../assets/img/sm.png';

export const massedesData = [
    { id: 1, massedes: 'Alecscscx' },
    { id: 2, massedes: 'Ale' },
    { id: 3, massedes: 'Alevg gh' },
    { id: 4, massedes: 'Alerh ' },

]
export const DialogsData = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Ale' },
    { id: 3, name: 'Vas' },
    { id: 4, name: 'Jora' },
    { id: 5, name: 'Lena' },
    { id: 6, name: 'Liza' },
    { id: 7, name: 'Lera' },
]

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={clases.Dialog + " " + clases.active}>
            <img src={ImgSm} className={clases.imgIcon} alt="" />
            <NavLink to={path}> {props.name} </NavLink>
        </div>

    )
}
const Massedes = (props) => {

    return (
        <div className={clases.messade}>
            {props.massedes}
        </div>
    );
}


const Dialogs = (props) => {

    return (
        <div className={clases.Dialogs}>

            <div className={clases.DialogItems}>
                {DialogsData.map(item => {
                    return <DialogItem name={item.name} id={item.id} key={item.id} />
                })}

            </div>

            <div className={clases.messades}>
                {massedesData.map((massedges) => <Massedes massedes={massedges.massedes} />)}
            </div>

        </div>
    )
}
export default Dialogs;