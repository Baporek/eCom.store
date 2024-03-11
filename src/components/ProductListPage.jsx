import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productStyles from '../styles/ProductStyles.module.css';
const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://v2.api.noroff.dev/online-shop')
      .then(response => response.json())
      .then(data => {
        if (data && data.data && Array.isArray(data.data)) {
          setProducts(data.data); // Update products state with fetched array of products
        } else {
          console.error('Invalid data structure received from the API:', data);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className={productStyles.container}> 
      <h2>Products</h2>
      <div className={productStyles.productList}> 
        {Array.isArray(products) && products.map(product => (
          <div key={product.id} className={productStyles.product}> 
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        ))}
      </div>
      <Link to="/" className={productStyles.returnButton}>Return to Home</Link> 
    </div>
  );
};

export default ProductListPage;
