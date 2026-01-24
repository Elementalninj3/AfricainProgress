import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Founders from './pages/Founders';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Article from './pages/Article';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full overflow-x-hidden flex flex-col selection:bg-primary selection:text-white bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:id" element={<Article />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
