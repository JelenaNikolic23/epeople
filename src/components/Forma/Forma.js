import React, {useState, useContext} from "react";

import style from "./Forma.module.scss";
import Button from "../Button/Button";
import Store from "../../Store/store";
import {ADD_USER, SET_USERS} from "../../Store/actionTypes";

const INITIAL_STATE = {
    name: '',
    email: '',
    picture: '',
    gender: 'femail',
    date: new Date()
}
//
// constructor(user) {
//     this.gender = user.gender;
//     this.name = `${user.name.first} ${user.name.last}`;
//     this.email = user.email;
//     this.date = user.dob.date;
//     this.photo = user.picture.large;
// }
const Forma = () => {
    const {state, dispatch} = useContext(Store)
    const [formaDate, setformaDate] = useState(INITIAL_STATE)
    const onChange = (e) => {
        console.log(e.target)
        const {name, value} = e.target;
        setformaDate((prevState) => ({...prevState, [name]: value}));
    }


    const validation = formaDate.name.length === 0 ||  formaDate.email.length === 0 || formaDate.picture.length === 0;

    const submit = () => {
        dispatch({
            type: ADD_USER,
            payload: formaDate
        })
    }

    return(
        <div className={style.forma}>

            <p>User Name</p>
            <input onChange={onChange} type="text" id="name" name="name" placeholder="Your user name.." value={formaDate.name}/>

            <p>Email</p>
            <input onChange={onChange} type="email" id="email" name="email" placeholder="Your Email.." value={formaDate.email}/>

            <p>Picture</p>
            <input onChange={onChange} type="text" id="picture" name="picture" placeholder="Your picture.." value={formaDate.picture}/>

            <Button className={style.button} disabled={validation} text='Submit' onClick={submit}/>
        </div>
            )
}

export default Forma;
