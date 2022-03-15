import * as axios from "axios";
import React from "react";


const FindUser = (props) => {

    let getUsers = () => {
        if (props.findUser.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            });
        }
    }
//debugger
    return (
        <div>
            <button onClick={getUsers}> ggg</button>
        <div>{props.findUser.map(f => <div key={f.id}>

            <div>{'f.name'} </div>
            <div>{'f.hobbi'}</div>
            <div>{'f.location.siti'}</div>
            <div>{'f.location.country'}</div>
            <div>
                {f.follow ?
                    <button onClick={() => this.props.unFollow(f.id)} >follow</button> :
                    <button onClick={() => this.props.follow(f.id)}>unfollow</button>
                }
            </div>
        </div>

        )
        }
        </div>
       </div>
    )
};

export default FindUser;