import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CheckoutSuccessPage.module.css';

const CheckoutSuccessPage = ({ clearCart }) => {
  useEffect(() => {
    // Clear the cart when the component mounts
    clearCart();
  }, [clearCart]); // Include clearCart in the dependency array

  return (
    <div className={styles.container}>
      <h2>Order Successful!</h2>
      <p>Your order has been successfully placed.</p>
      <p>Thank you for shopping with us!</p>
      <Link to="/" className={styles.link}>Go back to the store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
