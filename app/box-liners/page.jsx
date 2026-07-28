'use client';

import { useState } from 'react';
import { ShoppingCart, Check, Info } from 'lucide-react';
import Link from 'next/link';

export default function BoxLiners() {
  const [thickness, setThickness] = useState('1 mil');
  const [size, setSize] = useState('12x12');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} box(es) of Box Liners (${thickness}, ${size}) to cart.`);
  };

  return (
    <>
      <header className="product-hero" style={{ '--hero-bg': 'url("/hero-bg.jpg")' }}>
        <div className="product-hero-content">
          <h1>Premium <span>Box Liners</span></h1>
          <p>FDA-approved polyethylene box liners to protect freshness, prevent moisture transfer, and maintain product integrity during shipping and storage.</p>
        </div>
      </header>

      <div className="product-page-body">
        <div className="container" style={{ padding: '60px 5%' }}>
          <div className="product-grid">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image">
                <img src="/box-liners.png" alt="Box Liners" />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="breadcrumbs">
                <Link href="/">Home</Link> / Packaging / Poly Products / <span>Box Liners</span>
              </div>
              
              <h2>Customize Your Order</h2>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>FDA & USDA approved for food contact</span>
                </div>
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>Excellent moisture and dust barrier</span>
                </div>
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>Available in clear rolls or flat boxes</span>
                </div>
              </div>

              <div className="options-section">
                <div className="option-group">
                  <label>Thickness</label>
                  <div className="radio-group">
                    {['1 mil', '1.5 mil', '2 mil', '3 mil'].map(t => (
                      <button 
                        key={t}
                        className={`option-btn ${thickness === t ? 'active' : ''}`}
                        onClick={() => setThickness(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="option-group">
                  <label>Size</label>
                  <div className="radio-group">
                    {['12x12', '18x24', '24x24', '36x36'].map(s => (
                      <button 
                        key={s}
                        className={`option-btn ${size === s ? 'active' : ''}`}
                        onClick={() => setSize(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="purchase-section">
                <div className="quantity-selector">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                
                <button className="btn-primary add-to-cart-btn" onClick={handleAddToCart}>
                  <ShoppingCart size={20} />
                  Add to Quote / Cart
                </button>
              </div>
              
              <div className="callout-box">
                <Info size={20} color="var(--accent-color)" />
                <p>Looking for a custom size or volume discount? <Link href="#">Talk to a packaging specialist.</Link></p>
              </div>
            </div>
          </div>

          <div className="product-details-tabs">
            <div className="tabs-header">
              <button className="tab-btn active">Description</button>
              <button className="tab-btn">Specifications</button>
              <button className="tab-btn">Shipping Info</button>
            </div>
            <div className="tab-content">
              <h3>Protect your products with premium Box Liners</h3>
              <p>Our poly box liners are designed to keep your products safe from contamination, moisture, and dust during storage or transit. Made from high-quality, food-grade polyethylene, they are perfect for meat processing, baking, produce, and general food manufacturing.</p>
              
              <ul className="custom-list">
                <li>Strong bottom seals to prevent leaks.</li>
                <li>Packed on rolls or flat in boxes for easy dispensing.</li>
                <li>Clear material for easy product identification.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
