import React, { useEffect } from "react";
import s from './findUser.module.scss'
import userphoto from '../../assets/img/Ava.jpg'
import { Pagination } from 'antd';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redaxStore";
import { FindUserApi } from '../../API/api'

const FindUser1 = () => {


    const dispatch = useDispatch
    const findUser = useSelector((state: AppStateType) => state.findUser)
    console.log('find', findUser)

    let pagesCountF = Math.ceil(findUser.totalCoundF / findUser.pageSizeF)
    let pages = []
    for (let i = 1; i <= pagesCountF; i++) { pages.push(i) }
    const currentPage = findUser.currentPageF
    const pageSizeF = findUser.pageSizeF
    //@ts-ignore
    useEffect(() => { dispatch(FindUserApi.setUserFapi(currentPage, pageSizeF)) }, [])






    return (
        <div >
            page
            {/* <div>
                    {
                        pages.map(p => {
                            return <span className={props.currentPageF === p && s.findUserPagination}
                                onClick={() => { props.onChengePage(p) }}>{p}</span>
                        })
                    } </div> */}
            {/* <Pagination className={s.findUserPagination} defaultCurrent={10} total={findUser.totalCoundF} /> */}



            {
                findUser.users.map(u => <div key={u.id}>
                    <div className={s.findUser}>
                        <div>
                            <div>{u.name}</div>
                            <img src={u.photos.small != null ? u.photos.small : userphoto}
                                alt="ava" />
                            <div> {
                                u.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/{u.id}`, {
                                            withCredentials: true,
                                            headers: { 'API-KEY': ' f7fadd9b-3e43-4308-9c60-85f68b8fa3a4' }
                                        }).then(response => {
                                            if (response.data.resultCode == 0) {
                                                //@ts-ignore
                                                findUser.followF(u.id)
                                            }
                                        })
                                    }}>fols</button>
                                    :
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/{u.id}`, {
                                            withCredentials: true,
                                            headers: { 'API-KEY': ' f7fadd9b-3e43-4308-9c60-85f68b8fa3a4' }
                                        }).then(response => {
                                            if (response.data.resultCode == 0) {
                                                //@ts-ignore
                                                findUser.unFollowF(u.id)
                                            }
                                        })
                                    }}>true</button>

                            }
                            </div>
                        </div>

                        <div>

                            <div>status:{u.status}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default FindUser1;