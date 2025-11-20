import { createContext, useContext } from "react";

const AuthContext = createContext();
    const { user } = useContext(AuthContext);
    return user ? user.username : null;

export const userAuth = () => useContext(AuthContext);

export default AuthContext;