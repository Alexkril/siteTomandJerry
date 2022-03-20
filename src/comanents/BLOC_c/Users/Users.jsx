import React from "react";
import c from './users.module.scss'
import userphoto from '../../../assets/img/Ava.jpg'

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div> 
            page
            {pages.map(p => {
                return <span className={props.currentPage === p && c.select}
                    onClick={(e) => { props.onPostChanget(p) }}> {p} </span>
            })}

            {props.usersPage.map(u => {

                return <div key={u.id}>

                    <div className={c.users}>
                        <div className={c.usersBlock} >
                            <div className={c.leftBlock}>

                                <div className={c.foto}>
                                    <img src={u.photos.small != null ? u.photos.small : userphoto}
                                        alt="ava" />
                                </div>

                                <div className={c.button}>
                                    {u.followed ?
                                        <button onClick={() => props.follow(u.id)}>unfollow</button> :
                                        <button onClick={() => props.unFollow(u.id)} >follow</button>

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