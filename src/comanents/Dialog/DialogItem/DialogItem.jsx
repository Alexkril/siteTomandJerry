import React from "react";
import { Link } from "react-router-dom";
import clases from './../DialogItem/DialogItem.module.css';
import ImgSm from '../../../assets/img/sm.png';

const DialogItem = (props) => {

    let path = "/Dialogs/"+props.id;

    return (
        <div className={clases.DialogItem + " " + clases.active}>
            <img src={ImgSm} className={clases.imgIcon} alt="" />
            <Link to={path}> {props.name} </Link>
        </div>

    )
}

export default DialogItem;