import React, { useEffect } from "react";
import clases from './heder.module.scss'
import { NavLink } from "react-router-dom";
import imguser from '../../assets/img/Ava.jpg'
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../reduser/authReduser";
import axios from "axios";
import { AppStateType } from "../../redaxStore";
import { authAPI, dialogApi } from '../../API/api'
//import { getAuthThunkCreetor } from '../../reduser/authReduser'
import { setStatus } from '../../reduser/dialogReduser'


type propsType = {
    isAuhs: boolean
    login: string
}


const HederUser = (props: propsType) => {



    useEffect(() => {
        //  getAuthThunkCreetor()
        authAPI.setAuth()

            .then((data: any) => {
                if (data.resultCode === 0) {
                    let { id, email, login, isAuhs } = data.data
                    dispatch(setUserData(id, email, login, isAuhs))
                    dialogApi.getStatusApi(id).then((response: any) => {
console.log('ffffff',response.data)
                        dispatch(setStatus(response.data))

                    })
                }
            })
    }, [])

    const dispatch = useDispatch()
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

