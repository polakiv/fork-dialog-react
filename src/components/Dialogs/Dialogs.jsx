import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage; // приходят пропсы из редьюсера (то есть через DialogsContainer)

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  ); 
	// помещает карту имен из локального стейта ( DialogsContainer) в переменную с намерением распечатать ниже...
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );
    // помещает карту сообщений из локального стейта ( DialogsContainer) в переменную с намерением распечатать ниже...
    

    let newMessageBody = state.newMessageBody;// приходит из стейта ( DialogsContainer) данные newMessageBody

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

  //  if (!props.isAuth) return <Redirect to={"/login"} /> ;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>

            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;

























