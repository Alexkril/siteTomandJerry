import React, { useEffect } from "react";
import s from '../dialogItem.module.scss'
import { useState } from "react";
import { useSelector} from "react-redux";
import { AppStateType } from "../../../../redaxStore";
import { dialogApi } from '../../../../API/api'

const StatusDialog = () => {
    const getStatus = useSelector((state: AppStateType) => state.dialogPage.status)

    const [value, setValue] = useState(getStatus === '' ? 'status' : getStatus)
    const onChange = (e: any) => {
        setValue(e.target.value)
    }
    const [editMode, setEditMode] = useState(false)
    const activeteChengeStatus = () => setEditMode(true)
    const diActiveteChengeStatus = () => {
        setEditMode(false)               
        dialogApi.updateStatusApi(value)  
    }

    useEffect(() => {
        if (getStatus) { setValue(getStatus) }
    }, [getStatus])

    return (
        <div>
            {!editMode &&
                <div className={s.statusText}>
                    <span onDoubleClick={activeteChengeStatus} > {value}</span>
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