
import React, { useState, useEffect } from 'react';
import '../styles/addToCart.css';

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [randomProduct, setRandomProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const data = await response.json();
        setProducts(data);

        if (data.length > 0) {
          const randomMerch = response.data[Math.floor(Math.random() * response.data.length)];
          setRandomProducts(randomMerch);
          
        } else {
          setError(prev => prev ? prev + " | No live streamers found." : "No live streamers found.");
        }

      } 
      catch (error) {
        console.error("Error fetching products:", error);
        // setError("Failed to fetch products.");
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    // Add your add to cart logic here
    console.log(`Added ${product.title} to cart`);
  };

  return (
    <div className="product-display">
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2 className='product-title'>{product.title}</h2>
            <div className="cheese">
              <img src={product.image} alt={product.title} />
              <p>${product.price}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button>Save for Later</button>
            <button>Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};




export default FetchProducts;

  


