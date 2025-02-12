
import React from "react";
import Header from "../components/PageHeader";
import Footer from "../components/PageFooter";
import MainContentDisplayWindow from "../components/Main-Content-Window";
import '../components/styles/Cart.css';


const CartPage = () => {
    return (
        <div>
            <Header/>
            <br />
            
            <h1>Your Cart</h1>

            <div className="page-body">
                <div className="cart-main">
                    <div className="content-container">
                        <MainContentDisplayWindow/>
                        <MainContentDisplayWindow/>
                    </div>
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

export default CartPage;




