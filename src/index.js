import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ProductPage from './components/ProductPage';
import ProductListPage from './components/ProductListPage';
import CheckoutPage from './components/CheckoutPage';
import CheckoutSuccessPage from './components/CheckoutSuccessPage';
import ContactPage from './components/ContactPage';
import Layout from './components/Layout';
import CartIcon from './components/CartIcon';
import Home from './components/Home';
import './styles/GlobalStyles.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productIdToRemove) => {
    const updatedCart = cart.filter(item => item.id !== productIdToRemove);
    setCart(updatedCart);
  };

  const clearCart = useCallback(() => {
    setCart([]);
  }, [setCart]);

  return (
    <Router>
      <Layout>
        <CartIcon itemCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage addToCart={addToCart} removeFromCart={removeFromCart} />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/cart" element={<CheckoutPage cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
          <Route path="/checkout-success" element={<CheckoutSuccessPage clearCart={clearCart} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
