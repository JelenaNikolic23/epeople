import React from 'react'

import Button from "../Button/Button";

import style from "./List.module.scss";
import email from '../../assets/image/email.svg';
import birthday from '../../assets/image/birthday.svg';

const ListItem = ({ user, removeUser }) => {
    return (
        <div className={style.list}>
            <img className={style.profile} src={user.photo}/>
            <div>
            <h2>{user.name}</h2>
            <p><img className={style.icon} src={email}/> {user.getEmail()}</p>
            <p><img className={style.icon} src={birthday}/> {user.getDate()}</p>
            </div>
            <div className={style.footer}>
                <Button text='Delete' onClick={() => removeUser(user)}/>
            </div>
        </div>
)};

export { ListItem };
