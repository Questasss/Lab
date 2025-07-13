// components/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <h2>Welcome to Shop Smart!</h2>
      <p>Start your shopping journey now.</p>
      <Link to="/login">Login to Continue</Link>
    </div>
  );
}

export default Welcome;
