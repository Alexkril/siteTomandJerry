import React from "react";
import { connect } from "react-redux";
import FindUser from './FindUser.jsx'
import { followAC, anFollowAC, setUsersAC } from '../../reduser/FindUserReduser.js'

let mapStateToProps = (state) => {
    
    return {
        findUser: state.findUser.findUser
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid))
        },
   
        anFollow: (userid) => {
            dispatch(anFollowAC(userid))
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        }
    }
}

let FindUserContainer = connect(mapStateToProps, mapDispatchToProps)(FindUser)
export default FindUserContainer;