import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to='./about'>о нас</Link>
                <Link to='./posts'>посты</Link>
            </div>
        </div>
    )
}

export default Navbar