'use client';

import { useState } from 'react';
import { ShoppingCart, Check, Info } from 'lucide-react';
import Link from 'next/link';

export default function ShrinkBags() {
  const [barrier, setBarrier] = useState('Standard (Non-Barrier)');
  const [size, setSize] = useState('6x12');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} case(s) of Shrink Bags (${barrier}, ${size}) to quote.`);
  };

  return (
    <>
      <header className="product-hero" style={{ '--hero-bg': 'url("/shrink-bags-bg.jpg")' }}>
        <div className="product-hero-content">
          <h1>Premium <span>Shrink Bags</span></h1>
          <p>Crystal-clear shrink packaging that perfectly contours to your product, providing a second-skin fit and outstanding retail presentation.</p>
        </div>
      </header>

      <div className="product-page-body">
        <div className="container" style={{ padding: '60px 5%' }}>
          <div className="product-grid">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image">
                <img src="/shrink-bags.png" alt="Shrink Bags" />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="breadcrumbs">
                <Link href="/">Home</Link> / Packaging / Poultry & Meat / <span>Shrink Bags</span>
              </div>
              
              <h2>Customize Your Quote</h2>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>Up to 45% shrink rate in hot water or tunnels</span>
                </div>
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>Exceptional clarity and gloss</span>
                </div>
                <div className="benefit-item">
                  <Check size={18} color="var(--accent-color)" />
                  <span>Superior puncture resistance for bone-in products</span>
                </div>
              </div>

              <div className="options-section">
                <div className="option-group">
                  <label>Barrier Type</label>
                  <div className="radio-group">
                    {['Standard (Non-Barrier)', 'High-Barrier (EVOH)'].map(b => (
                      <button 
                        key={b}
                        className={`option-btn ${barrier === b ? 'active' : ''}`}
                        onClick={() => setBarrier(b)}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="option-group">
                  <label>Size</label>
                  <div className="radio-group">
                    {['6x12', '8x16', '12x20', '16x24'].map(s => (
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
                  Add to Quote
                </button>
              </div>
              
              <div className="callout-box">
                <Info size={20} color="var(--accent-color)" />
                <p>Not sure which barrier type you need? <Link href="#">Talk to a packaging specialist.</Link></p>
              </div>
            </div>
          </div>

          <div className="product-details-tabs">
            <div className="tabs-header">
              <button className="tab-btn active">Description</button>
              <button className="tab-btn">Specifications</button>
              <button className="tab-btn">Usage Instructions</button>
            </div>
            <div className="tab-content">
              <h3>Second-skin fit for premium presentation</h3>
              <p>Our shrink bags are ideal for fresh meats, poultry, cheeses, and processed meats. After vacuuming and sealing, submerging the bag in hot water causes it to shrink tightly around the product, virtually eliminating purge (juice loss) and creating a highly appealing look.</p>
              
              <ul className="custom-list">
                <li>EVOH high-barrier options for extended shelf life.</li>
                <li>Curved bottom seals available for poultry.</li>
                <li>Reduces freezer burn by eliminating air pockets.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
