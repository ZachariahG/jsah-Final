
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/Merch-Content.css';


const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
        const response = await axios.get('https://fakestoreapi.com/products?limit=1');
        const data = response.data;  
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products.");
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    // Add "add to cart" logic here
    console.log(`Added ${product.title} to cart`);
  };

  return (
    <div className='product-display'>
      {error && <p>{error}</p>}
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <div className="cheese">
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
          </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button>Save for Later</button>
            <button>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
};

export default FetchProducts;


