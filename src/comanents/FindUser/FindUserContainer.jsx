import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, setUsersF, setCurrentPageF,
     toogleFetching, setUsersFThunkCreetor } from "../../reduser/FindUserReduser";
import FindUser from './FindUser.jsx'
import * as axios from "axios";
import Preloader4 from "../common/Prelouder/Preloader4";
import {FindUserApi} from '../../API/api'


class FindUserContainer extends React.Component {
    componentDidMount() {
        this.props.setUsersFThunkCreetor()
        // this.props.toogleFetching(true)
        
        // FindUserApi.setUserFapi(this.props.currentPage, this.props.pageSizeF).then(data => { 
        //         this.props.toogleFetching(false)
        //         this.props.setUsersF(data.items)
        //     })
    }



    onChengePage = (page) => {
        this.props.setCurrentPageF(page)
        this.props.toogleFetching(true)
        FindUserApi.setUserFapi(page, this.props.pageSizeF).then(data => {
            this.props.toogleFetching(false)
            this.props.setUsersF(data.items)
        })
    }


    render() {

        return <>
            {this.props.isFetchingF ? <Preloader4 /> : null}
            <FindUser
                followF={this.props.follow}
                unFollowF={this.props.unFollow}
                findUser={this.props.findUser}
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

export default connect(mapStateToProps, { follow, unFollow, setUsersF,
     setCurrentPageF, toogleFetching, setUsersFThunkCreetor })(FindUserContainer)

