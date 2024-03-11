import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from '../styles/ProductDetails.module.css';
import productStyles from '../styles/ProductStyles.module.css';

const ProductPage = ({ addToCart, removeFromCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const { data } = await response.json();
        console.log('Fetched product data:', data);
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);
  
  useEffect(() => {
    console.log('Product:', product);
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      console.log('Added to cart:', product);
    }
  };

  const handleRemoveFromCart = () => {
    if (product) {
      removeFromCart(product.id);
      console.log('Removed from cart:', product);
    }
  };

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.container}>Error: {error.message}</div>;
  }

  if (!product) {
    return null;
  }

  const discountedPrice = product.discountedPrice;
  const price = product.price;
  const discount = discountedPrice ? price - discountedPrice : 0;
  const priceAfterDiscount = discountedPrice ? discountedPrice : price;

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <div className={styles.priceInfo}>
          {discountedPrice ? (
            <>
              <p>Main Price: ${price}</p>
              <p>Discount: ${discount}</p>
              <p>Price after Discount: ${priceAfterDiscount}</p>
            </>
          ) : (
            <p>Price: ${price}</p>
          )}
        </div>
        <div className={styles.buttons}>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        </div>
        <div className={styles.reviews}>
          {product.reviews && product.reviews.length > 0 && (
            <div>
              <h3>Reviews:</h3>
              <ul>
                {product.reviews.map((review, index) => (
                  <li key={`${review.id}-${index}`}>
                    <p>ID: {review.id}</p>
                    <p>Username: {review.username}</p>
                    <p>Rating: {review.rating}</p>
                    <p>Description: {review.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Link to="/" className={productStyles.returnButton} >Return to Home</Link>
      </div>
    </div>
  );
};

export default ProductPage;
