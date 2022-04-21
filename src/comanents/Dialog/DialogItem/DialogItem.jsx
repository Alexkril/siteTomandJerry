import React from "react";
import { Link } from "react-router-dom";
import clases from './../DialogItem/dialogItem.module.scss';
import Preloader from "../../common/Prelouder/Preloader";
import youtube from '../../../assets/img/in.jpeg'
import StatusDialog from '../DialogItem/statusDialog/StatusDialog'

const DialogItem = (props) => {

    let path = "/Dialogs/" + props.id;
    if (!props.setUserDialog) {
        return <Preloader />
    }

    return (
        <div className={clases.DialogItem + " " + clases.active}>
            <div>{props.setUserDialog.aboutMe} </div>

            <div className={clases.DialogItemFoto}>
                <img src={props.setUserDialog.data.photos.small} className={clases.imgIcon} alt="" />
                <div>
                   < StatusDialog />
                </div>
                <Link to={path}>  </Link>
                <div>{props.setUserDialog.data.contacts.youtube !== null ?
                    props.setUserDialog.data.contacts.youtube :
                    <div className={clases.Icon} >
                        <img src={youtube} />
                    </div>}</div>

                <div>{props.setUserDialog.data.contacts.twitter}</div>
                
                <div>{props.setUserDialog.data.contacts.github}</div>
            </div>

        </div>

    )
}

export default DialogItem;