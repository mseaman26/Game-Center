import React, { createContext, useContext, useState} from 'react'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <AuthContext.Provider
            value={{currentUser, setCurrentUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}