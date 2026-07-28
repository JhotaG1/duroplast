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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
