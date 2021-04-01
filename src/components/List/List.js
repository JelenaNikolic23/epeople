import React from 'react'
import {ListItem} from "./ListItem";
import EmptyState from "../EmptyState/EmptyState";


const List = ({ users, removeUser }) =>{

    if(!users.length) {
        return <EmptyState/>
    }
    return (
        <>
            {users.map(user => <ListItem user={user} removeUser={removeUser}/>)}
        </>
    );
};
export default List;
