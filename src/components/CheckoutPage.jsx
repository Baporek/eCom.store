import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CheckoutPage.module.css';

const CheckoutPage = ({ cart, removeFromCart, clearCart }) => {
  const handleCheckout = () => {
    console.log('Checkout clicked');
  };

  const handleRemoveFromCart = (productIdToRemove) => {
    removeFromCart(productIdToRemove);
  };

  const handleClearCart = () => {
    clearCart();
  };

  useEffect(() => {
    console.log('Cart:', cart);
  }, [cart]);

  const total = cart.reduce((sum, product) => sum + (product.discountedPrice || product.price), 0);

  return (
    <div className={styles.container}>
      <h2>Cart</h2>
      {cart.map(product => (
        <div key={product.id} className={styles.product}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.discountedPrice || product.price}</p>
          <button className={styles.removeButton} onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <p className={styles.total}>Total: ${total.toFixed(2)}</p>
      <Link to="/checkout-success" className={styles.link}>
        <button className={styles.checkoutButton} onClick={handleCheckout}>Checkout</button>
      </Link>
      <button className={styles.clearButton} onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default CheckoutPage;
