// TODO
import React from 'react';

import style from "./Search.module.scss";
import search from "../../assets/image/search.svg"

const SearchBar = ({inputValue, handleChange}) => (
    <div className={style.search}>
       <img src={search}/>
        <input
            className={style.users}
            id="search"
            type="text"
            placeholder="Search users"
            value={inputValue}
            onChange={handleChange}
        />
    </div>
)

export default SearchBar;


