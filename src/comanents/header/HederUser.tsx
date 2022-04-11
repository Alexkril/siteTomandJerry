import React, { useEffect } from "react";
import clases from './heder.module.scss'
import { NavLink } from "react-router-dom";
import imguser from '../../assets/img/Ava.jpg'
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../reduser/authReduser";
import axios from "axios";
import { AppStateType } from "../../redaxStore";



type propsType = {
    isAuhs: boolean
    login: string
}


const HederUser = (props: propsType) => {

    let dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    //@ts-ignore
                    dispatch(setUserData(id, email, login))
                }
            })
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
