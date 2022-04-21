import React from "react";
import clases from '../Dialog/Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import { useSelector, useDispatch } from "react-redux";
import { nevTextDialog, nevMassegeDate, setUserDialogPage, SetUserDialogType } from "../../reduser/dialogReduser";
import { initialStateType } from '../../reduser/dialogReduser'
import { AppStateType } from "../../redaxStore";
import { useEffect } from "react";
import { dialogApi } from '../../API/api'
import { Navigate } from 'react-router-dom';

type PropsType = {
    messade: string
    massedes: string

}

const Massedes = (props: PropsType) => {
    return (
        <div className={clases.messade}>
            {props.massedes}
        </div>
    );
}

const Dialogs = () => {
    const dispatch = useDispatch()

    const user: initialStateType = useSelector((state: AppStateType) => state.dialogPage)
    const authMyId = useSelector((state: AppStateType) => state.auth.id)

    let massedesElement = user.massedesData
        .map((massedges) => <Massedes massedes={massedges.massedes} messade={""} />)

    let DialogsElenent = user.DialogsData
        .map((Dialog) => <DialogItem name={Dialog.name}
            id={Dialog.id}
            setUserDialog={user.setUserDialog} />)



    let onPostText = () => {
        return (
            dispatch(nevMassegeDate())
        )
    }

    let addMassage = (e: any) => {
        let text = e.target.value;
        dispatch(nevTextDialog(text))
    }

    // //@ts-ignore
    //  if (!authRederect) return <Navigate  to={'/login/'}/>


    useEffect(() => {        // setDialogThuncCreetor()
        // 
        dialogApi.setDialogApi(String(22937)).then((data: SetUserDialogType) => {
            dispatch(setUserDialogPage(data))
        })
    }, [])

    return (
        <div className={clases.Dialogs}>
            <div className={clases.DialogItems}>
                {DialogsElenent}</div>

            <div className={clases.messades}>
                {massedesElement}
                <div>
                    <textarea onChange={addMassage}
                        value={user.addPageMassege}
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