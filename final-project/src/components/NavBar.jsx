
import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => (
    <nav>
        <ul>
            <li img className="logo" src={logo} alt="Logo" ><Link to="/">Home</Link></li>
            <li className="sort-box">Sort goes here<Link to="/cart">Cart</Link></li>
            <li className="cart">Cart goes here<Link to="/saved-items">Saved Items</Link></li>
        </ul>
    </nav>
);

export default NavBar;


