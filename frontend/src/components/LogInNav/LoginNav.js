import React from 'react'
import {Link} from "react-router-dom"
import "./LoginNav.css"
const LoginNav = () => {
    return (
        <div className='LoginNav-container'>
           <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>LogIn</Link></li>
            <li><Link to='/signup'>SignUp</Link></li>
           </ul>
        </div>
    )
}

export default LoginNav;
