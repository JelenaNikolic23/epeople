import {ADD_USER, SET_USERS, REMOVE_USER,EDIT_USER} from './actionTypes';

export default function reducer(state, action) {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user=>user.name !== action.payload)
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map(user => user.name === action.payload.name ? action.payload : user)
            }

    }
}
