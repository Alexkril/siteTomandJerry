import React from "react";
import { connect } from "react-redux";
import Users from './Users.jsx'
import {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching, setUserThunkCreetor
} from './../../../reduser/usersReduser'
import Preloader from "../../common/Prelouder/Preloader.jsx";
import * as axios from "axios";
import { UserAri } from '../../../API/api'




class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setUserThunkCreetor()
        // this.props.toogleIsFetching(true)
        // // axios.get
        // //     (`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        // // &count=${this.props.pageSize}`, 
        // // { withCredentials: true })
        // UserAri.setUserApi(this.props.currentPage, this.props.pageSize )
        //     .then(data => { 
        //         this.props.toogleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     });
    }
    onPostChanget = (pageNomber) => {
        this.props.setCurrentPage(pageNomber)
        this.props.toogleIsFetching(true)

        UserAri.setUserApi(pageNomber, this.props.pageSize)
            .then(data => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(data.items)
            });
    };

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                usersPage={this.props.usersPage}
                onPostChanget={this.onPostChanget}
                follow={this.props.follow}
                unFollow={this.props.unFollow}

            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toogleIsFetching,
        setUserThunkCreetor
    }
)(UsersContainer)
