import React from "react";
import style from "./button.module.scss"


const Button = ({text, onClick, className, disabled}) => <button className={`${style.button} ${className}`} type="button" onClick={onClick} disabled={disabled}> {text}</button>


export default Button;
