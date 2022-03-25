import React from "react";
import s from './findUser.module.scss'
import userphoto from '../../assets/img/Ava.jpg'
import { Pagination } from 'antd';


const FindUser = (props) => {

    let pagesCountF = Math.ceil(props.totalCoundF / props.pageSizeF)
    let pages = []
    for (let i = 1; i <= pagesCountF; i++) { pages.push(i) }





    return (
        <div >
            page <div>
                {
                    pages.map(p => {
                        <span className={true && s.findUserPagination} >{p}</span>
                    })
                } </div>
            <Pagination className={s.findUserPagination} defaultCurrent={10} total={props.totalCoundF} />



            {
                props.findUser.map(u => <div key={u.id}>
                    <div className={s.findUser}>

                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userphoto}
                                alt="ava" />
                            <div> {
                                u.followed ?
                                    <button onClick={() => props.follow(u.id)}>fols</button> :
                                    <button onClick={() => props.unFollow(u.id)}>true</button>

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

export default FindUser;