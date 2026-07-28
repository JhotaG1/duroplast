'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <img src="/Duropac-logo-01.svg" alt="Duropac" />
        Duro<span>pac</span>
      </Link>
      
      <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link href="/box-liners" className={pathname === '/box-liners' ? 'active' : ''}>Box Liners</Link>
        <Link href="#">Rollstock</Link>
        <Link href="#">Vacuum Pouches</Link>
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
