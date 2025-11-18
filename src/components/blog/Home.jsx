import React from "react";
import { Link } from "react-router";

function HomePage () {
    return (
        <><div class="home">
            <h2>My Blog</h2>
            <p>A place to find the most interesting blogs on the web. You can explore anything that has caught your interest. Login to explore.</p>
        </div><div class="links">
                <Link to="/login">Login</Link>
            </div></>
    );
}

export default HomePage;