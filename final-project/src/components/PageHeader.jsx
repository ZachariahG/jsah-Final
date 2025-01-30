
import React from "react";
import './styles/PageHeader.css';
import SearchBar from "./SearchBar";
import HomeButton from "./Home-Button";
import CartButton from "./Cart-Button";


function Header () {
    return (
        <header className="header">
            <div className="header-nav">
                
                
                <HomeButton/>
                
                <div className="search-bar">
                    <SearchBar/>
                </div>
                
                <CartButton/>
            </div>
        </header>
    )
};

export default Header;








