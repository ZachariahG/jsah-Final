
import React from "react";
import logo from '/src/images/logo.png';
import './styles/PageHeader.css';
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

function Header () {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="Logo" />
            <SearchBar/>
            
            <p className="cart">Cart goes here</p>
        </header>
    )
};

export default Header;









