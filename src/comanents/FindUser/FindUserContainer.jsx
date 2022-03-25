import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, setUsersF } from "../../reduser/FindUserReduser";
import FindUser from './FindUser.jsx'
import * as axios from "axios";

class FindUserContainer extends React.Component {
    componentDidMount() {
        if (this.props.setUsersF.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                this.props.setUsersF(response.data.items)
            })
        }
    }

    render() {

        return <>
            <FindUser
                findUser={this.props.findUser}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                pageSizeF={this.props.totalCoundF}
                totalCoundF={this.props.pageSizeF}
            />
        </>
    }

};

let mapStateToProps = (state) => {
    return {
        findUser: state.findUser.users,
        pageSizeF: state.findUser.pageSizeF,
        totalCoundF: state.findUser.totalCoundF
    }
}

export default connect(mapStateToProps, { follow, unFollow, setUsersF })(FindUserContainer)

