import React, { useState } from 'react';
import Nav from './nav';
import styles from '../styles/Header.module.css';

const Header = () => {
  // Initialize cartItems state
  const [cartItems] = useState([
   
    { id: 2, name: 'Item 2', quantity: 0},
  ]);
  
  return (
    <header className={styles.header}>
      <Nav cartItems={cartItems} />
    </header>
  );
}

export default Header;
