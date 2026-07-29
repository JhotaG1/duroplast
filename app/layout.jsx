import { Outfit } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import './App.css';
import './product.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Duropac - Food Packaging Solutions',
  description: 'High-performance flexible packaging solutions. Protect freshness, extend shelf life, reduce waste, and improve shelf presentation.',
};

import { QuoteProvider } from '../context/QuoteContext';
import CartSidebar from '../components/CartSidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <QuoteProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartSidebar />
        </QuoteProvider>
      </body>
    </html>
  );
}
