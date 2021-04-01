import React from 'react';

import GridItem from './GridItem';
import EmptyState from "../EmptyState/EmptyState";
import style from "./Grid.module.scss";


const Grid = ({users, removeUser }) => {
    if(!users.length) {
        return <EmptyState/>
    }
    return (
        <div className={style.carwrap}>
            {users.map((users, i)=> <GridItem removeUser={removeUser} key={i} user={users}/>)}
        </div>
    )
}

export default Grid;
