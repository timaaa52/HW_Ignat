import React from 'react'
import {Link} from "react-router-dom";
import './pages/header.css'

function Header() {
    return (
        <div className='header'>
                    <li><Link to={'/pre-junior'}> Pre Junior </Link> </li>
                    <li><Link to={'/junior'}>Junior </Link></li>
                    <li><Link to={'/junior-plus'}>Junior-Plus</Link></li>
        </div>
    )
}

export default Header
