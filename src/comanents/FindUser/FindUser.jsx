import * as axios from "axios";
import React from "react";

class FindUser extends React.Component {


    // componentDidMount() {
        
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users?page=2&count=5').then(response => {
    //        // debugger
    //         return(
    //         this.props.setUsersF(response.data.items))
    //     }
    //     )
    // }

    render() {
        //debugger
        return (
            <div>
                <div >{this.props.findUser.map(f => {
                    return <div key={f.id}>
                        <div>
                            <div>{f.name}</div>
                            <div> {f.status} </div>
                        </div>

                        <div>
                            {f.folowed ?
                                <button onClick={() => { this.props.folowed(f.id) }}> folowed </button> :
                                <button onClick={() => { this.props.unFollow(f.id) }}> unfolowed</button>
                            }
                        </div>
                        <div>f</div>
                        <div>f</div>
                    </div>
                })
                }
                </div>
            </div>
        )

    }
}


export default FindUser