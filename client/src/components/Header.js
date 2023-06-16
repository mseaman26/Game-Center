import React, {useEffect, useState} from "react";
import Auth from '../utils/auth'

const Header = () => {
    
console.log(Auth.getToken())

    return (
        <>
            <h1>Header</h1>
            <p>logged in as: {Auth.getProfile()? Auth.getProfile().data.username : 'not logged in'}</p>
        </>
    )
}

export default Header