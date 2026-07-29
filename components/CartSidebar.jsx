'use client';

import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { X, Trash2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const CartSidebar = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    removeFromQuote, 
    updateQuantity,
    totalItems 
  } = useQuote();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="cart-backdrop" 
        onClick={() => setIsCartOpen(false)}
      ></div>
      
      {/* Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Quote <span className="cart-badge">{totalItems}</span></h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={24} />
          </button>
        </div>
        
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your quote list is empty.</p>
              <button 
                className="btn-secondary" 
                onClick={() => setIsCartOpen(false)}
                style={{ marginTop: '20px' }}
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.product.image} alt={item.product.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4>{item.product.name}</h4>
                    <p className="cart-item-category">{item.product.category}</p>
                    
                    {Object.keys(item.options).length > 0 && (
                      <div className="cart-item-options">
                        {Object.entries(item.options).map(([key, value]) => (
                          <span key={key} className="option-badge">{value}</span>
                        ))}
                      </div>
                    )}
                    
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromQuote(index)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <Link 
              href="/checkout" 
              className="btn-primary w-100" 
              onClick={() => setIsCartOpen(false)}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
            >
              Submit Quote Request
              <ChevronRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
