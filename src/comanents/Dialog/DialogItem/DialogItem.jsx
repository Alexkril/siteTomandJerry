import React from "react";
import { Link } from "react-router-dom";
import clases from './../DialogItem/DialogItem.module.scss';
import Preloader from "../../common/Prelouder/Preloader";
import youtube from '../../../assets/img/in.jpeg'

const DialogItem = (props) => {

    let path = "/Dialogs/" + props.id;
    if (!props.setUserDialog) {
        return <Preloader />
    }

    return (
        <div className={clases.DialogItem + " " + clases.active}>
            <div>{props.setUserDialog.aboutMe} </div>

            <div className={clases.DialogItemFoto}>

                <img src={props.setUserDialog.photos.small} className={clases.imgIcon} alt="" />
                
                <Link to={path}>  </Link>
                <div>{props.setUserDialog.contacts.youtube !== null ?
                    props.setUserDialog.contacts.youtube :
                    <div className={clases.Icon} >
                        <img src={youtube} />
                    </div>}</div>

                <div>{props.setUserDialog.contacts.twitter}</div>
                
                <div>{props.setUserDialog.contacts.github}</div>
            </div>

        </div>

    )
}

export default DialogItem;