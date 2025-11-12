import React from "react";
import { Link } from "react-router";
import logo from "./myblog.png";
import { useTheme } from '../common/ThemeContext';

function Header() {
    const { toggleTheme } = useTheme();
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
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/comments">Comments</Link></li>
                    <button onClick={toggleTheme}>Toggle Theme</button>
                </ul>
            </nav>
        </div>
        </header>
    );    
}

export default Header;