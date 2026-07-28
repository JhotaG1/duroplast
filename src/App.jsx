import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BoxLiners from './pages/BoxLiners';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/box-liners" element={<BoxLiners />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
