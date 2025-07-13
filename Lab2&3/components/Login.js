// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // <-- Add this line

  const handleSubmit = e => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
      navigate('/products'); // <-- Navigate to products after login
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
