import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productStyles from '../styles/ProductStyles.module.css';

// Product komponent
const Product = ({ id, title }) => (
  <div className={productStyles.product}>
    <h3>{title}</h3>
    <Link to={`/product/${id}`}>View Product</Link>
  </div>
);

// Homepage komponent
const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://v2.api.noroff.dev/online-shop')
      .then(response => response.json())
      .then(data => {
        if (data && data.data && Array.isArray(data.data)) {
          const sortedProducts = data.data.sort((a, b) => a.title.localeCompare(b.title));
          setProducts(sortedProducts);
        } else {
          console.error('Invalid data structure received from the API:', data);
        }
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={productStyles.container}>
<input
  type="text"
  className={productStyles.searchInput}
  placeholder="Search products..."
  value={searchQuery}
  onChange={e => setSearchQuery(e.target.value)}
/>
      <div className={productStyles.productList}>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Product key={product.id} id={product.id} title={product.title} />
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default Home;
