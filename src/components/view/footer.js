import React, {useContext} from 'react';
import style from "./Footer.module.scss";
import Store from "../../Store/store";


const Footer = () => {
    const {state, dispatch} = useContext(Store)
    console.log(state)

    return (
        <footer>
            <div className={style.footer}>
                <p>Jelena Nikolic</p>
            </div>
        </footer>
    )

}

export default Footer;
