import React from "react";
import { connect } from "react-redux";
import Users from './Users.jsx'
import { followAC, unFollowAC, setUsersAC } from './../../../reduser/usersReduser'


let mapStateToProps = (state) => {

    return {
        usersPage: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid))
        },
        unFollow: (userid) => {
            dispatch(unFollowAC(userid))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
};


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;