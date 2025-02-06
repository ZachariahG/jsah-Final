
import React, {useState} from "react";
import './styles/PageHeader.css';
import SearchBar from "./SearchBar";
import HomeButton from "./buttons/Home-Button";
import CartButton from "./buttons/Cart-Button";
import SavedItemsButton from "./buttons/Saved-Items-Button";


function PageHeader () {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
    const [menu_class, setMenuClass] = useState('menu hidden');
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    //toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass('burger-bar clicked')
            setMenuClass('menu visible')
        }
        else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <header className="header">
            <nav className="header-nav">
                <HomeButton/>
                <div className="links">
                    <SavedItemsButton/>
                    <CartButton/>
                </div>
                <div className="burger-menu" onClick={updateMenu}> 
                    <div className={burger_class}></div> 
                    <div className={burger_class}></div> 
                    <div className={burger_class}></div> 
                </div>
            </nav>
            <div className={menu_class}>
                <SavedItemsButton/>
                <CartButton/>
            </div>
            <div className="search-bar">
                    <SearchBar/>
            </div>
        </header>
    )
};

export default PageHeader;



