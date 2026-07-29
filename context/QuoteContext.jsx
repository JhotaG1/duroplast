'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const QuoteContext = createContext();

export function QuoteProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('duropac_quote_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('duropac_quote_cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted]);

  const addToQuote = (product, quantity, options = {}) => {
    setCartItems(prev => {
      // Check if exact item already exists (same slug and options)
      const existingItemIndex = prev.findIndex(item => 
        item.product.slug === product.slug && 
        JSON.stringify(item.options) === JSON.stringify(options)
      );

      if (existingItemIndex >= 0) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      }

      return [...prev, { product, quantity, options }];
    });
    setIsCartOpen(true); // Auto open cart when adding
  };

  const removeFromQuote = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => {
      const newItems = [...prev];
      newItems[index].quantity = newQuantity;
      return newItems;
    });
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <QuoteContext.Provider value={{
      cartItems,
      isCartOpen,
      totalItems,
      addToQuote,
      removeFromQuote,
      updateQuantity,
      toggleCart,
      clearCart,
      setIsCartOpen
    }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
