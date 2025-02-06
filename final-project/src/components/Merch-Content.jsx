
import React from "react";
import axios from "axios";
// import './styles/Merch-Content.css';

// Fetch a random merch item
const FetchMerch = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/1')
      .then(res=>res.json())
      .then(json=>console.log(json))

    }
   catch (error) {
    console.error("Error fetching videos:", error);
    setError("Failed to fetch videos.");
  }

  return(
    <div className='product-display'>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <p>{product.image}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
};

export default FetchMerch; 




