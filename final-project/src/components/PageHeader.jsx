
import React from "react";
import './styles/PageHeader.css';
import SearchBar from "./SearchBar";
import HomeButton from "./buttons/Home-Button";
import CartButton from "./buttons/Cart-Button";
import SavedItemsButton from "./buttons/Saved-Items-Button";


function PageHeader () {
    return (
        <header className="header">
            <nav className="header-nav">
                <HomeButton/>
                <SavedItemsButton/>
                <CartButton/>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
            <div className="search-bar">
                    <SearchBar/>
            </div>
        </header>
    )
};

export default PageHeader;



