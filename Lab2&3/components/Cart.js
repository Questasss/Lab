import React from 'react';

export default function Cart({ cartItems, onRemove, onChangeQty }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cartItems.map(item => (
          <li key={item.id} style={{ marginBottom: '1em' }}>
            <strong>{item.name}</strong> — ${item.price.toFixed(2)} x {item.qty}
            <button onClick={() => onRemove(item.id)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
            <input 
              type="number" 
              min="1" 
              value={item.qty} 
              onChange={e => onChangeQty(item.id, +e.target.value)} 
              style={{ width: '50px', marginLeft: '10px' }}
            />
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
