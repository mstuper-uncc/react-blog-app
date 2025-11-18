import React from "react";
import { Link } from "react-router";
import logo from "./myblog.png";
import { useTheme } from '../common/ThemeContext';
import { useAuth } from '../login/Auth';

function Header() {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useAuth();
    return (
        <header class='header'>
        <div class='navbar'>
            <h1>
                <Link to="/">
                    <img src={logo} alt="myblog" class="logo" />
                </Link>
            </h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/comments">Comments</Link></li>
                    { user ? ( 
                        <li><button onClick={logout}>Logout</button></li>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                    <button onClick={toggleTheme}>Toggle Theme</button>
                </ul>
            </nav>
        </div>
        </header>
    );    
}

export default Header;