import React, { useState } from 'react';
// import { BASE_URL, ME } from '../utils/API';

export const AuthContext = React.createContext({
    user: null,
    token: '',
    isLoggedIn: true,
    login: (token) => { },
    logout: () => { }
})

export const AuthContextProvider = (props) => {

    const initialToken = localStorage.getItem('OMDB_TOKEN') || null; //check if token already present
    const [token, setToken] = useState(initialToken);
    const [user, setUser] = useState(null)
    const userLoggedIn = !!token;


    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('OMDB_TOKEN', token);
    }

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('OMDB_TOKEN')
    }

    const contextValue = {
        user: user,
        token: token,
        isLoggedIn: userLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}