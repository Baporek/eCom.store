import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  console.log('Product:', product);
  console.log('Image URL:', product.image.url);

  return (
    <div>
      <img src={product.image.url} alt={product.image.alt || product.title} style={{ width: '100px', height: '100px' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
