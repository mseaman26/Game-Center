import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'

const Header = () => {
    const handleLogOut = () => {
        Auth.logout()
    }
    


    return (
        <>
            <h1>Header</h1>
            <p>logged in as: {Auth.getProfile()? Auth.getProfile().data.username : 'not logged in'}</p>
            <Link to={'/login'}>Log In</Link>
    <Link to={'/signup'}>Sign Up</Link>
    <button onClick={handleLogOut}>Log Out</button>
        </>
    )
}

export default Header