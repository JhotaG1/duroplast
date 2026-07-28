'use client';

import { useState } from 'react';
import { ShoppingCart, Check, Info } from 'lucide-react';
import Link from 'next/link';

export default function RollstockFilm() {
  const [material, setMaterial] = useState('Standard Poly');
  const [width, setWidth] = useState('12"');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} roll(s) of Rollstock Film (${material}, ${width}) to quote.`);
  };

  return (
    <>
      <header className="product-hero" style={{ '--hero-bg': 'url("/rollstock-bg.jpg")' }}>
        <div className="product-hero-content">
          <h1>Automated <span>Rollstock Film</span></h1>
          <p>High-speed form-fill-seal (FFS) films and thermoforming webs designed for optimal runnability, clarity, and seal strength.</p>
        </div>
      </header>

      <div className="product-page-body">
        <div className="container" style={{ padding: '60px 5%' }}>
          <div className="product-grid">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image">
                <img src="/rollstock.png" alt="Rollstock Film" />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="breadcrumbs">
                <Link href="/">Home</Link> / Packaging / Automated / <span>Rollstock Film</span>
              </div>
              
              <h2>Customize Your Quote</h2>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>Compatible with VFFS and HFFS machines</span>
                </div>
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>Custom printed up to 10 colors</span>
                </div>
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>High-barrier and breathable options available</span>
                </div>
              </div>

              <div className="options-section">
                <div className="option-group">
                  <label>Material Type</label>
                  <div className="radio-group">
                    {['Standard Poly', 'High-Barrier EVA', 'Nylon Co-Ex'].map(m => (
                      <button 
                        key={m}
                        className={`option-btn ${material === m ? 'active' : ''}`}
                        onClick={() => setMaterial(m)}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="option-group">
                  <label>Web Width</label>
                  <div className="radio-group">
                    {['10"', '12"', '16"', 'Custom'].map(w => (
                      <button 
                        key={w}
                        className={`option-btn ${width === w ? 'active' : ''}`}
                        onClick={() => setWidth(w)}
                      >
                        {w}
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
                  Add to Quote
                </button>
              </div>
              
              <div className="callout-box">
                <Info size={20} color="var(--accent-color)" />
                <p>Rollstock pricing varies by volume and print requirements. <Link href="#">Request a detailed quote.</Link></p>
              </div>
            </div>
          </div>

          <div className="product-details-tabs">
            <div className="tabs-header">
              <button className="tab-btn active">Description</button>
              <button className="tab-btn">Specifications</button>
              <button className="tab-btn">Machinery Compatibility</button>
            </div>
            <div className="tab-content">
              <h3>Optimize production with high-performance Rollstock</h3>
              <p>Our rollstock films are engineered to run seamlessly on your packaging lines, minimizing downtime and reducing scrap. We offer specialized laminations for snacks, frozen foods, medical devices, and industrial parts.</p>
              
              <ul className="custom-list">
                <li>Excellent hot tack for fast sealing speeds.</li>
                <li>Laser scoring and tear notches available.</li>
                <li>Anti-fog and UV protection add-ons.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
