import React, { useEffect } from "react";
import clases from './heder.module.scss'
import { NavLink } from "react-router-dom";
import imguser from '../../assets/img/Ava.jpg'
import { useDispatch, useSelector } from "react-redux";
//import { setUserData } from "../../reduser/authReduser";
import axios from "axios";
import { AppStateType } from "../../redaxStore";
import { authAPI } from '../../API/api'
import { getAuthThunkCreetor } from '../../reduser/authReduser'


type propsType = {
    isAuhs: boolean
    login: string
}


const HederUser = (props: propsType) => {

    let dispatch = useDispatch()

    useEffect(() => {
        getAuthThunkCreetor()
        // auser.setAuser()
        //     .then((data: any) => {
        //         //@ts-ignore
        //         if (data.resultCode === 0) {
        //             let { id, email, login } = data.data
        //             //@ts-ignore
        //             dispatch(setUserData(id, email, login))
        //         }
        //     }) 
        //@ts-ignore
      
    }, [])

   

    const isAuhs = useSelector((state: AppStateType) => state.auth)

    console.log(isAuhs)

    return (

        <div className={clases.hederUser}>
            <div className={clases.hederUserBlock}>
                {isAuhs.isAuhs ?
                    <div>
                        <img src={imguser} alt="foto user id" />
                        <div className={clases.hederUserEmail}> {isAuhs.email}</div>
                        <div className={clases.hederUserEmail}> {isAuhs.login}</div>
                    </div>
                    :
                    <div className={clases.hederUserLoginActiv}>
                        <NavLink to={'login/'}> login </NavLink>
                    </div>
                }
            </div>

        </div>
    )
}

export default HederUser

