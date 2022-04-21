import React, { useEffect } from "react";
import s from '../dialogItem.module.scss'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppStateType } from "../../../../redaxStore";
import { dialogApi } from '../../../../API/api'
import *as axios from "axios";
import {
    //getStatusThuncCreetor,
    // updateStatusThuncCreetor,
    updateStatus, setStatus
} from '../../../../reduser/dialogReduser'



const StatusDialog = (props: any) => {
    const getStatus = useSelector((state: AppStateType) => state.dialogPage.status)
    const userid = useSelector((state: AppStateType) => state.auth.id)

    const [status, setStatusSelector] = useState(getStatus)

    const [value, setValue] = useState(getStatus)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     if (userid) { getStatusThuncCreetor(userid) } else return
    // }, [userid])

    const onChange = (e: any) => {
        setValue(e.target.value)
    }
    // useEffect(()=>{
    //     //@ts-ignore
    //     dialogApi.getStatusApi(userid).then((response:any )=>response.data )
    //      //@ts-ignore
    //    // dispatch(setStatus(userid))
    // })
    

    const [editMode, setEditMode] = useState(false)
    const activeteChengeStatus = () => setEditMode(true)
    const diActiveteChengeStatus = () => {
        setEditMode(false)
        dialogApi.updateStatusApi(value)
        dispatch(updateStatus(value))
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeteChengeStatus} > {status}</span>
                </div>
            }
            {editMode && <div className={s.statusInput}>
                < input autoFocus={true} onBlur={diActiveteChengeStatus} value={value}
                    onChange={onChange} />
            </div>}

        </div >
    )
}
export default StatusDialog