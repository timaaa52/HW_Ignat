import React from 'react'
import {NavLink} from "react-router-dom";
import s from './pages/header.module.css'

function Header() {
    return (
        <div>
            <input type="checkbox" id="hmt" className={s.hiddenMenuTicker}/>
                <label className={s.btnMenu} htmlFor="hmt">
                    <span className={s.first}></span>
                    <span className={s.second}></span>
                    <span className={s.third}></span>
                </label>
                <ul className={s.hiddenMenu}>
                    <li><NavLink to={'/pre-junior'}> Pre Junior </NavLink> </li>
                    <li><NavLink to={'/junior'}>Junior </NavLink></li>
                    <li><NavLink to={'/junior-plus'}>Junior-Plus</NavLink></li>
                </ul>
        </div>
    )
}

export default Header
