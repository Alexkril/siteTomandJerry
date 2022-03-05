import React from "react";
import c from './users.module.scss'
import imgAva from "../../../assets/img/Ava.jpg"

const Users = () => {
    return (
        <div className={c.users}>
            <div className={c.usersBlock} >
                <div className={c.leftBlock}>
                    <div className={c.foto}>
                        <div>
                            <img src={imgAva} alt="Ava" />
                        </div>
                    </div>
                    <div className={c.button}>
                        <button >follow</button>
                    </div>

                </div>

                <div className={c.rightBlock}>
                    <div></div>
                </div>
            </div>

        </div>
    )
};
export default Users;