// ./components/ProductList.js
import React from 'react';

function ProductList({ products, onAddToCart }) {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2e7d32' }}>
        Product List
      </h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            {/* 如果有图片，可以放这里 */}
            {/* <img src={product.image} alt={product.name} /> */}

            <strong>{product.name}</strong>
            <div className="price">${product.price.toFixed(2)}</div>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
