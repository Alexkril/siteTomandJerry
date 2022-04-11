import React from "react";
import clases from '../Dialog/Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import { useSelector, useDispatch } from "react-redux";
import { nevTextDialog, nevMassegeDate, setUserDialogPage, setDialogThuncCreetor, SetUserDialogType } from "../../reduser/dialogReduser";
import { initialStateType } from '../../reduser/dialogReduser'
import { AppStateType } from "../../redaxStore";
import axios from "axios";
import { useEffect } from "react";
import { dialogApi } from '../../API/api'

type PropsType = {
    messade: string
    massedes: string

}

const Massedes = (props: PropsType) => {
    console.log(props)

    return (
        <div className={clases.messade}>
            {props.massedes}
        </div>
    );
}



const Dialogs = () => {



    useEffect(() => {

        setDialogThuncCreetor()
        // 

//         dialogApi.setDialogApi().then((data: SetUserDialogType) => {
// console.log('ffff',data)
//             dispatch(setUserDialogPage(data))
//         })


        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
        //     dispatch(setUserDialogPage(response.data))

    }, [])

    const dispatch = useDispatch()

    const user: initialStateType = useSelector((state: AppStateType) => state.dialogPage)
    console.log('gggg', user)

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