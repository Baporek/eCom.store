import React from 'react';
import { Link } from 'react-router-dom';
import navStyles from '../styles/Nav.module.css';

const Nav = ({ itemCount }) => {
  const navLinks = [
    { path: '/', text: 'Home' },
    { path: '/products', text: 'Products' },
    { path: '/contact', text: 'Contact' }
  ];

  return (
    <nav className={navStyles.nav}>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
