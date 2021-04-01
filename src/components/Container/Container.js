import React, {useContext} from "react";
import List from "../List/List";
import Grid from "../Grid/Grid";
import style from "./Container.module.scss";
import Store from "../../Store/store";
import {REMOVE_USER} from "../../Store/actionTypes";

const Container = ({view, filteredUsers}) => {
    const {state, dispatch} = useContext(Store)
    const removeUserHandler = (user) => {
        console.log('KLIKNUO SI', user)
        dispatch({
            type: REMOVE_USER,
            payload: user.name
        })
    }

    return(
    <div className={style.container}>
        {
            view === 'view_list'
                ? <List users={filteredUsers} removeUser={removeUserHandler} />
                : <Grid users={filteredUsers} removeUser={removeUserHandler} />
        }

    </div>
    )
}

export default Container;
