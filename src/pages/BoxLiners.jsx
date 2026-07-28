import { useState } from 'react';
import { ShoppingCart, Check, Info } from 'lucide-react';
import './BoxLiners.css';

const BoxLiners = () => {
  const [thickness, setThickness] = useState('1 mil');
  const [size, setSize] = useState('12x12');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    alert(`Added ${quantity} box(es) of Box Liners (${thickness}, ${size}) to cart.`);
  };

  return (
    <div className="product-page">
      <div className="container" style={{ padding: '60px 5%' }}>
        <div className="product-grid">
          {/* Image Gallery */}
          <div className="product-gallery">
            <div className="main-image">
              <img src="/box-liners.png" alt="Box Liners" />
            </div>
            <div className="thumbnail-grid">
              <div className="thumbnail active"><img src="/box-liners.png" alt="Thumb" /></div>
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info">
            <div className="breadcrumbs">
              Home / Packaging / Poly Products / <span>Box Liners</span>
            </div>
            
            <h1>Box Liners</h1>
            
            <p className="product-description">
              We provide box liners with varying thicknesses and sizes that line your containers to prevent moisture transfer onto boxes or bins. Essential for food safety and maintaining product integrity during shipping and storage.
            </p>

            <div className="benefits-list">
              <div className="benefit-item">
                <Check size={18} color="var(--accent-color)" />
                <span>FDA & USDA approved for food contact</span>
              </div>
              <div className="benefit-item">
                <Check size={18} color="var(--accent-color)" />
                <span>Excellent moisture barrier</span>
              </div>
              <div className="benefit-item">
                <Check size={18} color="var(--accent-color)" />
                <span>Available in custom sizes</span>
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
              <p>Looking for a custom size or volume discount? <a href="#">Talk to a packaging specialist.</a></p>
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
  );
};

export default BoxLiners;
