import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { nevTextDialog, nevMassegeDate, setUserDialogPage } from "../../reduser/dialogReduser";
import Dialogs from "./Dialogs";
import { withRouter } from "react-router-dom";

class DialogsContainer extends React.Component {
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {

            this.props.setUserDialogPage(response.data)
        })
    }


    render() {

        return <>
            <Dialogs {...this.props}
                // massedesData={this.props.massedesData}
                // DialogsData={this.props.DialogsData}
                // nevTextDialog={this.props.nevTextDialog}
                // nevMassegeDate={this.props.nevMassegeDate}
                // addPageMassege={this.props.addPageMassege}
                // setUserDialog={this.props.setUserDialog} 
                />

        </>
    }
}

let mapStateToProps = (state) => {

    return {
        massedesData: state.dialogPage.massedesData,
        addPageMassege: state.dialogPage.addPageMassege,
        DialogsData: state.dialogPage.DialogsData,
        addText: state.dialogPage.DialogsData,
        setUserDialog: state.dialogPage.setUserDialog
    }
}
let WithUrlDataContainerComponent = withRouter(DialogsContainer)
export default connect(mapStateToProps, { nevTextDialog, nevMassegeDate, setUserDialogPage })(WithUrlDataContainerComponent)




