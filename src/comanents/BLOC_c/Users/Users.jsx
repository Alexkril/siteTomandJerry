import * as axios from "axios";
import React from "react";
import c from './users.module.scss'
import userphoto from '../../../assets/img/Ava.jpg'

class Users extends React.Component {
    getUsers = () => {
        if (this.props.usersPage.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    render() {  

        return (
            <div>
                <div className={c.button}> <button onClick={this.getUsers} >GET USERS</button> </div>
                {
                    this.props.usersPage.map(u => {

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
                                                <button onClick={() => this.props.unFollow(u.id)} >follow</button> :
                                                <button onClick={() => this.props.follow(u.id)}>unfollow</button>
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
}

export default Users;