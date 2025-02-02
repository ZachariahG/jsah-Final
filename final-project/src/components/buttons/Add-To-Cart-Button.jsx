
// This is just filler info till we have the API in place
import React, { useState } from 'react';
import '../styles/addToCart.css';

function ProductList() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    // ... more products
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className='product-display'>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;