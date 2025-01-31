
import React from "react";
import './styles/PageHeader.css';
import SearchBar from "./SearchBar";
import HomeButton from "./buttons/Home-Button";
import CartButton from "./buttons/Cart-Button";
import SavedItemsButton from "./buttons/Saved-Items-Button";


function PageHeader () {
    return (
        <header className="header">
            <div className="header-nav">
                
                
                <HomeButton/>
                
                <div className="search-bar">
                    <SearchBar/>
                </div>
                
                <SavedItemsButton/>

                <CartButton/>
            </div>
        </header>
    )
};

export default PageHeader;



