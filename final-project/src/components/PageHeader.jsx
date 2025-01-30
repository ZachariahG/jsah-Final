
import React from "react";
import logo from '/src/images/logo.png';
import './styles/PageHeader.css';
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

function Header () {
    return (
        <header className="header">
            <div className="header-nav">
                
                
                <button className="logo">Home w/ img</button>
                
                <div className="search-bar">
                    <SearchBar/>
                </div>
                
                <p className="cart">Cart goes here</p>
            </div>
        </header>
    )
};

export default Header;









