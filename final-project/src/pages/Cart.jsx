

import React from "react";
// import './styles/Cart.css'; Giving error, not sure why.


function CartPage () {
    return(
        <div className="page-body">
            <div className="cart-main">
                <div className="cart-display window">cart-display</div>
                <div className="cart-display window">cart-display</div>
                <div className="cart-display window">cart-display</div>
            </div>
            <div className="saved-items-main">
                <div className="saved-item-display window">saved-item-display</div>
                <div className="saved-item-display window">saved-item-display</div>
                <div className="saved-item-display window">saved-item-display</div>
            </div>
        </div>
    )
}

export default CartPage;





