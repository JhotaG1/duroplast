'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import productsData from '@/data/products.json';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Group products by category
  const categories = productsData.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <img src="/Duropac-logo-01.svg" alt="Duropac" />
        Duro<span>pac</span>
      </Link>
      
      <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        
        <div className="dropdown">
          <div className="dropdown-label">
            Products <ChevronDown size={16} />
          </div>
          <div className="dropdown-menu">
            {Object.keys(categories).map((categoryName) => (
              <div key={categoryName} className="dropdown-item">
                <span>{categoryName}</span>
                <ChevronRight size={14} color="var(--accent-color)" />
                <div className="sub-dropdown">
                  {categories[categoryName].map(product => (
                    <Link 
                      key={product.slug} 
                      href={`/products/${product.slug}`} 
                      className="sub-dropdown-item"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href="#" className="btn-primary" style={{ padding: '8px 20px', marginLeft: '10px' }}>Get Quote</Link>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <ShoppingCart size={20} color="var(--primary-color)" />
        </button>
      </div>

      <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', background: 'none', border: 'none' }}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
};

export default Navbar;
