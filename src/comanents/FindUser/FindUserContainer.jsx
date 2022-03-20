import { connect } from "react-redux";
import FindUser from './FindUser.jsx';
import { followAC, unFollowAC, setUsersAC } from '../../reduser/FindUserReduser'

let mapStateToProps = (state) => {
    return {
        findUser: state.findUser.user
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid))
        },
        unFollow: (userid) => {
            dispatch(unFollowAC(userid))
        },
        setUsersF: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}


let findUserReduser = connect(mapStateToProps, mapDispatchToProps)(FindUser)

export default findUserReduser