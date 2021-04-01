import React from 'react';

import style from './Header.module.scss';
import grid from "../../assets/image/grid.svg"
import list from "../../assets/image/list.svg"
import refresh from "../../assets/image/refresh.svg"

const Header = (props) => {
    return (
        <nav className={style.header}>

                <h1>Esome People</h1>
                <ul className={style.right}>
                    <li onClick={props.updateClick}><img src={refresh}/></li>
                    {
                        props.view === 'view_list'
                            ? <li onClick={props.handleClick}><img src={list}/></li>
                            : <li onClick={props.handleClick}><img src={grid}/></li>
                    }
                </ul>

        </nav>
    )
};

export default Header;
