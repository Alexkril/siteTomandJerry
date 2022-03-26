import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, setUsersF, setCurrentPageF, toogleFetching } from "../../reduser/FindUserReduser";
import FindUser from './FindUser.jsx'
import * as axios from "axios";
import Preloader4 from "../common/Prelouder/Preloader4";

class FindUserContainer extends React.Component {
    componentDidMount() {
        this.props.toogleFetching (true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSizeF}`).then(response => {
                this.props.toogleFetching (false)
                  this.props.setUsersF(response.data.items)
            })
       }
         onChengePage = (page) => {
                this.props.setCurrentPageF(page)
                this.props.toogleFetching (true)
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSizeF}`).then(response => { 
                    this.props.toogleFetching (false)
                    this.props.setUsersF(response.data.items)
                })
            }
    

    render() {

        return <>
        {this.props.isFetchingF ? <Preloader4 /> : null}
            <FindUser
                follow={this.props.follow}
                findUser={this.props.findUser}
                unFollow={this.props.unFollow}
                pageSizeF={this.props.totalCoundF}
                totalCoundF={this.props.pageSizeF}
                currentPageF={this.props.currentPageF}
                setCurrentPageF={this.props.setCurrentPageF}
                onChengePage={this.onChengePage}

            />
        </>
    }

};

let mapStateToProps = (state) => {
   
    return {
        findUser: state.findUser.users,
        pageSizeF: state.findUser.pageSizeF,
        totalCoundF: state.findUser.totalCoundF,
        currentPageF: state.findUser.setCurrentPageF,
        currentPageF: state.findUser.currentPageF,
        isFetchingF: state.findUser.isFetchingF
    }
}

export default connect(mapStateToProps, { follow, unFollow, setUsersF, setCurrentPageF, toogleFetching })(FindUserContainer)

