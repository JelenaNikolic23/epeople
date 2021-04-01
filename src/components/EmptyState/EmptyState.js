import React from "react";

import image from "../../assets/image/sad.svg"
import style from "./EmptyState.module.scss";


const EmptyState = () => (
    <div className={style.emptystate}>
        <img src={image} />
        <p> We couldn't find people matching search</p>
    </div>
)

export default EmptyState;
