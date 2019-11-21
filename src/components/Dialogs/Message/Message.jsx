import React from 'react';
import s from './../Dialogs.module.css';
// здесь распечатываются сообщения, по отдельности
const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div> // данные идут через пропсы из Dialogs
}
 
export default Message;