import React from 'react';

import style from "./Grid.module.scss";
import Button from "../Button/Button";

const GridItem = (props) => {
    return (
        <div className={style.grid}>
            <img alt='' src={props.user.photo}/>
            <h2>{props.user.name}</h2>
             <div className={style.body}>
                <p>{props.user.getEmail()}</p>
                <p>Birth date:  {props.user.getDate()}</p>

                 <div className={style.footer}>
                     <Button text='Delete' onClick={() => props.removeUser(props.user)}/>
                 </div>
            </div>


        </div>

    )
}

export default GridItem;
