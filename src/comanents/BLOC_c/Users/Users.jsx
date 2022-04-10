import React from "react";
import c from './users.module.scss'
import userphoto from '../../../assets/img/Ava.jpg'
import { Pagination } from 'antd';
import { NavLink } from "react-router-dom";
import axios from "axios";


const Users = (props) => {

    // let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    // let pages = []
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i)
    // }

    return (
        <div>

            <Pagination className={c.usersBlockf} defaultCurrent={20} total={props.totalUserCount}
                onChange={(e) => { props.onPostChanget(e) }} showSizeChanger={false} />


            {/* 
            {pages.map(p => {
                return <span className={props.currentPage === p && c.select}
                    onClick={(e) => { props.onPostChanget(p) }} > {p} </span>
            })} */}
            {props.usersPage.map(u => {

                return <div key={u.id}>

                    <div className={c.users}>
                        <div className={c.usersBlock} >
                            <div className={c.leftBlock}>
                                <NavLink to={'/Dialogs/' + u.id}>
                                    <div className={c.foto}>
                                        <img src={u.photos.small != null ? u.photos.small : userphoto}
                                            alt="ava" />
                                    </div>
                                </NavLink>
                                <div className={c.button}>
                                    {u.followed ?

                                        <button onClick={() => {
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: { 'API-KEY': ' f7fadd9b-3e43-4308-9c60-85f68b8fa3a4' }
                                                }).then(response => {
                                                    if (response.data.resultCode == 0) {
                                                        props.follow(u.id)
                                                    }
                                                })
                                        }}>unfollow</button> :

                                        <button onClick={() => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                                {
                                                    withCredentials: true,
                                                    headers: { 'API-KEY': ' f7fadd9b-3e43-4308-9c60-85f68b8fa3a4' }
                                                }).then(response => {
                                                    
                                                    if (response.data.resultCode == 0) {
                                                        props.unFollow(u.id)
                                                    }
                                                })
                                        }}>follow</button>
                                    }


                                </div>

                            </div>

                            <div className={c.rightBlock}>
                                <div>
                                    <div>{u.name}</div>
                                    <div> {u.status} </div>
                                </div>
                                <div>
                                    <div> {'u.location.siti'} </div>
                                    <div> {'u.location.country'} </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })
            }
        </div >

    )
}


export default Users;