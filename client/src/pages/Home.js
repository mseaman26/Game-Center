import React from 'react';
import { Link } from 'react-router-dom'
import Auth from '../utils/auth'



const Home = () => {

const handleLogOut = () => {
    Auth.logout()
}

return (
    <>
    <h1>Home Page</h1>
    <Link to={'/login'}>Log In</Link>
    <Link to={'/signup'}>Sign Up</Link>
    <button onClick={handleLogOut}>Log Out</button>
    </>
)
}
export default Home