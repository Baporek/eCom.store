import React from 'react';
import { Link } from 'react-router-dom';
import cartStyles from '../styles/CartIcon.module.css';

const CartIcon = ({ itemCount }) => (
  <div className={cartStyles.cartIcon}>
    <Link to="/cart">
      <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path fill="white" d="M4 4v2h16.22l-1.68 8.38c-.17.87-.97 1.62-1.84 1.62H8.52c-.87 0-1.67-.75-1.84-1.62L4 6zm6 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7-5.5V10h-2V7c0-1.1-.9-2-2-2H9V4h10l1.94 9.68c.06.31.31.55.62.55H17zm-7-7V4h4v1H7z" />
      </svg>
      {/* Display the number of items in the cart */}
      <span className={cartStyles.itemCount}>{itemCount}</span>
    </Link>
  </div>
);

export default CartIcon;
