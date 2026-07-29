'use client';

import { useState, use } from 'react';
import { ShoppingCart, Check, Info } from 'lucide-react';
import Link from 'next/link';
import productsData from '../../../data/products.json';
import { notFound } from 'next/navigation';

export default function ProductLanding({ params }) {
  // In Next.js 15, params is a Promise. We unwrap it with React.use()
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  
  const product = productsData.find(p => p.slug === slug);
  
  if (!product) {
    notFound();
  }

  const [quantity, setQuantity] = useState(1);
  const [option1, setOption1] = useState('Standard');
  const [option2, setOption2] = useState('Medium');

  const handleAddToCart = () => {
    alert(`Added ${quantity} of ${product.name} to quote.`);
  };

  return (
    <>
      <header className="product-hero" style={{ '--hero-bg': `url("${product.bgImage}")` }}>
        <div className="product-hero-content">
          <h1>Premium <span>{product.name}</span></h1>
          <p>{product.description}</p>
        </div>
      </header>

      <div className="product-page-body">
        <div className="container" style={{ padding: '60px 5%' }}>
          <div className="product-grid">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="main-image">
                <img src={product.image} alt={product.name} />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <div className="breadcrumbs">
                <Link href="/">Home</Link> / Packaging / {product.category} / <span>{product.name}</span>
              </div>
              
              <h2>Customize Your Quote</h2>
              
              <div className="benefits-list">
                {product.features && product.features.length > 0 ? (
                  product.features.map((feature, idx) => (
                    <div className="benefit-item" key={idx}>
                      <Check size={18} color="var(--accent-color)" />
                      <span>{feature}</span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="benefit-item">
                      <Check size={18} color="var(--accent-color)" />
                      <span>High quality {product.category.toLowerCase()} solution</span>
                    </div>
                    <div className="benefit-item">
                      <Check size={18} color="var(--accent-color)" />
                      <span>Customizable to your specific requirements</span>
                    </div>
                    <div className="benefit-item">
                      <Check size={18} color="var(--accent-color)" />
                      <span>Optimized for industrial food packaging</span>
                    </div>
                  </>
                )}
              </div>

              <div className="options-section">
                <div className="option-group">
                  <label>Type / Material</label>
                  <div className="radio-group">
                    {['Standard', 'High Barrier', 'Custom'].map(o => (
                      <button 
                        key={o}
                        className={`option-btn ${option1 === o ? 'active' : ''}`}
                        onClick={() => setOption1(o)}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="option-group">
                  <label>Size / Width</label>
                  <div className="radio-group">
                    {['Small', 'Medium', 'Large', 'Custom'].map(s => (
                      <button 
                        key={s}
                        className={`option-btn ${option2 === s ? 'active' : ''}`}
                        onClick={() => setOption2(s)}
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
                <p>Not sure what specifications you need? <Link href="#">Talk to a packaging specialist.</Link></p>
              </div>
            </div>
          </div>

          <div className="product-details-tabs">
            <div className="tabs-header">
              <button className="tab-btn active">Description</button>
              <button className="tab-btn">Specifications</button>
            </div>
            <div className="tab-content">
              <h3>{product.name} for Premium Presentation</h3>
              <p>{product.description}</p>
              <p>Our solutions in the {product.category} category are designed to extend shelf life, protect against moisture and oxygen, and provide a superior presentation on retail shelves. We work closely with our clients to engineer the exact formulation needed for their production lines.</p>
              
              <ul className="custom-list">
                <li>FDA-approved for direct food contact.</li>
                <li>Custom printing available up to 10 colors.</li>
                <li>Consistent quality for high-speed machinery.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
