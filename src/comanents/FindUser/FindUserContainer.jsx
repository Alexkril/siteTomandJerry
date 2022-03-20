import React from "react";
import { connect } from "react-redux";
import FindUser from './FindUser.jsx';
import { follow, unFollow, setUsersF } from '../../reduser/FindUserReduser'
import * as axios from "axios";

class FindUserContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?page=2&count=5').then(response => {
            return (
                this.props.setUsersF(response.data.items))
        }
        )
    };

    render() {

        return (<FindUser
            findUser={this.props.findUser}
            followed={this.props.follow}
            unFollowed={this.props.unFollow}
        />

        )
    }

}
let mapStateToProps = (state) => {
  
    return {
        findUser: state.findUser.user
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userid) => {
//             dispatch(followAC(userid))
//         },
//         unFollow: (userid) => {
//             dispatch(unFollowAC(userid))
//         },
//         setUsersF: (users) => {
//             dispatch(setUsersAC(users))
//         }
//     }
// }


let findUserReduser = connect(mapStateToProps, { follow, unFollow, setUsersF })(FindUserContainer)

export default findUserReduser