import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-logo">
            Duro<span>pac</span>
          </div>
          <p className="footer-text">
            High-performance flexible packaging solutions. Protect freshness, extend shelf life, reduce waste, and improve shelf presentation.
          </p>
        </div>
        
        <div className="footer-col">
          <h4>Products</h4>
          <ul>
            <li><Link href="/box-liners">Box Liners</Link></li>
            <li><Link href="/vacuum-pouches">Vacuum Pouches</Link></li>
            <li><Link href="/shrink-bags">Shrink Bags</Link></li>
            <li><Link href="/rollstock-film">Rollstock Film</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Sustainability</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Duropac. All rights reserved. (Next.js Modernized Demo)
      </div>
    </footer>
  );
};

export default Footer;
