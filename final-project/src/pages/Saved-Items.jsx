import React from "react";
import Header from "../components/PageHeader";
import Footer from "../components/PageFooter";


const SavedItemsPage = () => {
    return (
        <div>
            <Header/>
            <br />
            
            <h1>Saved Items Page</h1>

            <div className="page-body">
                <div className="cart-main">
                    <div className="cart-display-window">cart-display</div>
                    <div className="cart-display-window">cart-display</div>
                    <div className="cart-display-window">cart-display</div>
                </div>
                <div className="saved-items-main">
                    <div className="saved-item-display-window">saved-item-display</div>
                    <div className="saved-item-display-window">saved-item-display</div>
                    <div className="saved-item-display-window">saved-item-display</div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default SavedItemsPage;
