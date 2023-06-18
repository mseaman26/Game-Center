import React from "react";
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'
import { useAuthContext } from "../utils/authContext";


const Header = () => {

    const { currentUser, setCurrentUser } = useAuthContext()

    console.log(Auth.loggedIn())
    console.log(Auth.getProfile())

    const handleLogOut = () => {
        setCurrentUser('not logged in')
        Auth.logout()
    }


    return (
        <>
            <h1>Header</h1>
            <p>logged in as: {Auth.loggedIn()? currentUser : 'not logged in'}</p>
            {!Auth.loggedIn() ? 
                <>
                <Link to={'/login'}>Log In</Link>
                <Link to={'/signup'}>Sign Up</Link></> 
                : <button onClick={handleLogOut}>Log Out</button>}
            
            
        </>
    )
}

export default Header