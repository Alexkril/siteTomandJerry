import React from "react";
import s from '../dialogItem.module.scss'
import { useState } from "react";



const StatusDialog = (props: any) => {

//@ts-ignore
const [status, setStatus] = useState('hello')


const [editMode, setEditMode] = useState(false)

const activeteChengeStatus =()=>{
    setEditMode(true)
    console.log('knopka+', activeteChengeStatus)
}
const diActiveteChengeStatus =()=>{
    console.log('knopka-', diActiveteChengeStatus)
    setEditMode(false)
}

    return (
        <div>
           { !editMode &&
            <div>
                <span onDoubleClick={activeteChengeStatus} > {status}</span>
            </div>
}
          {editMode && <div className={s.statusInput}>
                < input autoFocus={true} onBlur={diActiveteChengeStatus} value={status} />
            </div>}
        </div >

    )
}
export default StatusDialog