import Link from 'next/link';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Flexible Packaging<br />Solutions <span>for Growth</span></h1>
          <p>We help food producers extend shelf life, protect product quality, reduce waste, and improve shelf presentation with high-performance packaging solutions.</p>
          <div className="hero-actions">
            <Link href="/box-liners" className="btn-primary">View Products</Link>
            <Link href="#" className="btn-outline">Talk to an Expert</Link>
          </div>
        </div>
      </header>

      <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-100px' }}>
        <div className="overlap-card">
          <h4>Why Duropac?</h4>
          <h2>Protect Freshness & Reduce Waste</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🛡️</div>
              <h3>Shelf Life</h3>
              <p>Extend shelf life and protect freshness with high-barrier packaging solutions.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">♻️</div>
              <h3>Sustainability</h3>
              <p>Recycle-ready and paper board options for brands looking to reduce plastic impact.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h3>Custom Packaging</h3>
              <p>From stock packaging to custom printed solutions, we help your food brand scale professionally.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-wrapper container">
        <div className="kicker">Featured Categories</div>
        <h2 className="section-title">Packaging Solutions</h2>
        <div className="categories-grid">
          <Link href="/box-liners" className="category-card">
            <img src="/box-liners.png" alt="Box Liners" />
            <div className="category-content">
              <h3>Box Liners</h3>
              <p>Prevent moisture transfer onto boxes or bins with varying thicknesses and sizes.</p>
            </div>
          </Link>
          <div className="category-card">
            <div className="category-placeholder">Vacuum Pouches</div>
            <div className="category-content">
              <h3>Vacuum Pouches</h3>
              <p>High-barrier pouches for meat and seafood processors.</p>
            </div>
          </div>
          <div className="category-card">
            <div className="category-placeholder">Rollstock</div>
            <div className="category-content">
              <h3>Rollstock Film</h3>
              <p>Automated packaging solutions for high-volume production.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
