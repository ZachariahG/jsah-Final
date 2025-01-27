
import React from "react";
import logo from '/src/images/logo.png';
import './styles/PageHeader.css';

function Header () {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Logo" />
            <div className="header-nav">
                <p className="sort-box">Sort goes here</p>
                <p className="search-bar">Search bar goes here</p>
                <p className="cart">Cart goes here</p>
            </div>
        </header>
    )
}

export default Header;









