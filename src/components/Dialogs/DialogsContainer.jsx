import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer"; // приходит sendMessageCreator из редьюсера
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom"; 
import {compose} from "redux";

let mapStateToProps = (state) => { // в стейте приходит да
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody)); // dispatch следит за изменениями sendMessageCreator
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps) 
)(Dialogs);