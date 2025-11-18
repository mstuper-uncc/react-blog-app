import React, { createContext, useState, useContext } from 'react';

const Auth = createContext();

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    const login = (username, password) => {
    if (username && password) { 
        setUser({ username });
        return true;
    }
    return false; 
};

    const logout = () => setUser(null);

    return (
        <Auth.Provider value={{ user, login, logout }}>
            {children}
        </Auth.Provider>
    );
};

export const useAuth = () => useContext(Auth);