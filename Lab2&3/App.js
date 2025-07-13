import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import './App.css';
import Welcome from './components/Welcome';
import products from './data/products';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Todo from './components/Todo';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const handleLogin = username => setUser(username);

  const handleAddToCart = product => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleRemove = id => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleChangeQty = (id, qty) => {
    if (qty < 1) return;
    setCart(prev =>
      prev.map(item => (item.id === id ? { ...item, qty } : item))
    );
  };

  return (
    <Router>
      <header>
        <h1>Shop Smart</h1>
        {user && (
          <nav>
            <Link to="/products">Products</Link> |{' '}
            <Link to="/cart">Cart ({cart.length})</Link> |{' '}
            <Link to="/todo">Todo List</Link>
            <button onClick={() => setUser(null)}>Logout</button>
          </nav>
        )}
      </header>

      <main>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Protected routes */}
          {user ? (
            <>
              <Route path="/products" element={<ProductList products={products} onAddToCart={handleAddToCart} />} />
              <Route path="/cart" element={<Cart cartItems={cart} onRemove={handleRemove} onChangeQty={handleChangeQty} />} />
              <Route path="/todo" element={<Todo />} />
            </>
          ) : (
            <>
              <Route path="/products" element={<Navigate to="/login" />} />
              <Route path="/cart" element={<Navigate to="/login" />} />
              <Route path="/todo" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </main>

      <footer>
        <p>&copy; 2025 Questa Quan</p>
      </footer>
    </Router>
  );
}

export default App;

