
import React from "react";
import logo from '/src/images/logo.png';
import './styles/PageHeader.css';
import SearchBar from "./SearchBar";

function Header () {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Logo" />
            <div className="header-nav">
                <p className="sort-box">Sort goes here</p>
                <SearchBar/>
                <p className="cart">Cart goes here</p>
            </div>
        </header>
    )
};

export default Header;









