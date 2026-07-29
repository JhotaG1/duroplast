'use client';

import React, { useState } from 'react';
import { useQuote } from '../../context/QuoteContext';
import Link from 'next/link';
import { ArrowLeft, Send, CheckCircle, Info } from 'lucide-react';
import './checkout.css';

export default function CheckoutPage() {
  const { cartItems, totalItems, clearQuote } = useQuote();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for now since there's no real backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      clearQuote(); // empty the cart after successful submission
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="checkout-page success-state">
        <div className="container">
          <div className="success-card">
            <CheckCircle size={64} color="var(--primary-color)" />
            <h1>Quote Request Sent!</h1>
            <p>Thank you, {formData.firstName}. We have received your request and our team will get back to you within 24 hours.</p>
            <Link href="/" className="btn-primary">Return to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-header">
          <Link href="/" className="back-link">
            <ArrowLeft size={20} /> Back to Products
          </Link>
          <h1>Request a Quote</h1>
          <p>Please review your items and provide your contact details.</p>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="empty-checkout">
            <h2>Your quote list is empty</h2>
            <p>Add some products to your quote list before checking out.</p>
            <Link href="/" className="btn-primary">Browse Products</Link>
          </div>
        ) : (
          <div className="checkout-grid">
            
            {/* Form Section */}
            <div className="checkout-form-section">
              <div className="checkout-card">
                <h3>Contact Information</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="comments">Additional Comments or Requirements</label>
                    <textarea id="comments" name="comments" rows="4" value={formData.comments} onChange={handleChange} placeholder="Tell us more about your specific needs..."></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : (
                      <>Submit Request <Send size={18} /></>
                    )}
                  </button>
                </form>
              </div>
            </div>
            
            {/* Summary Section */}
            <div className="checkout-summary-section">
              <div className="checkout-card summary-card">
                <h3>Quote Summary <span className="summary-badge">{totalItems} Items</span></h3>
                
                <div className="summary-items">
                  {cartItems.map((item, index) => (
                    <div key={index} className="summary-item">
                      <div className="item-image">
                        <img src={item.product.image} alt={item.product.name} />
                      </div>
                      <div className="item-details">
                        <h4>{item.product.name}</h4>
                        <p className="item-category">{item.product.category}</p>
                        <div className="item-meta">
                          <span>Qty: {item.quantity}</span>
                          {Object.values(item.options).length > 0 && (
                            <span className="item-options">
                              {Object.values(item.options).join(', ')}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="summary-footer">
                  <p className="summary-note">
                    <Info size={16} />
                    Once submitted, our sales team will calculate the best pricing based on your quantities and requirements.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}
