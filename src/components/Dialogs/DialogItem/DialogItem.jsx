import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
// здесь распечатываются юзеры
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id; // данные идут через пропсы из Dialogs.jsx

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;