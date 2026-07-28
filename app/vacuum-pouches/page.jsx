'use client';

import { useState } from 'react';
import { ShoppingCart, Check, Info } from 'lucide-react';
import Link from 'next/link';

export default function VacuumPouches() {
  const [thickness, setThickness] = useState('3 mil');
  const [size, setSize] = useState('8x12');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} box(es) of Vacuum Pouches (${thickness}, ${size}) to cart.`);
  };

  return (
    <>
      <header className="product-hero" style={{ '--hero-bg': 'url("/vacuum-pouches-bg.jpg")' }}>
        <div className="product-hero-content">
          <h1>High-Barrier <span>Vacuum Pouches</span></h1>
          <p>Engineered for maximum oxygen and moisture barrier to dramatically extend shelf life for meats, cheeses, and seafood.</p>
        </div>
      </header>

      <div className="product-page-body">
        <div className="container" style={{ padding: '60px 5%' }}>
          <div className="product-grid">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image">
                <img src="/vacuum-pouches.png" alt="Vacuum Pouches" />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="breadcrumbs">
                <Link href="/">Home</Link> / Packaging / Pouches / <span>Vacuum Pouches</span>
              </div>
              
              <h2>Customize Your Order</h2>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>High Oxygen Transmission Rate (OTR) barrier</span>
                </div>
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>Excellent puncture resistance (bone-in meats)</span>
                </div>
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>High clarity for retail presentation</span>
                </div>
              </div>

              <div className="options-section">
                <div className="option-group">
                  <label>Thickness</label>
                  <div className="radio-group">
                    {['3 mil', '4 mil', '5 mil'].map(t => (
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
                    {['6x8', '8x12', '10x15', '12x18'].map(s => (
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
                <p>Need custom printing or metallic backing? <Link href="#">Talk to a packaging specialist.</Link></p>
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
              <h3>Extend shelf life with premium Vacuum Pouches</h3>
              <p>Our co-extruded vacuum pouches combine nylon and polyethylene to offer an exceptional barrier against oxygen and moisture. These are perfect for vacuum chamber machines used in the food industry to seal fresh meats, processed meats, and cheeses.</p>
              
              <ul className="custom-list">
                <li>Compatible with all commercial vacuum chamber machines.</li>
                <li>Boilable and freezable options available.</li>
                <li>Prevents freezer burn and dehydration.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
