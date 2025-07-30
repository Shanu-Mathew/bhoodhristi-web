import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyLogo from './components/CompanyLogo';
import Purpose from './components/Purpose';
import Services from './components/Services';
import Banner from './components/Banner';
import Brochure from './components/Brochure';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GetInTouch from './components/GetinTouch'

// ✅ Page Transition Wrapper
const PageTransitionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeInOut' } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeInOut' } }}
    >
      {children}
    </motion.div>
  );
};

// ✅ Animated Routes
function AnimatedRoutes() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <ScrollToTop />
      {!isHome && <Banner />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransitionWrapper>
                <Hero />
                <CompanyLogo />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransitionWrapper>
                <Purpose />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/services"
            element={
              <PageTransitionWrapper>
                <Services />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/team"
            element={
              <PageTransitionWrapper>
                <Team />
              </PageTransitionWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

// ✅ Main App
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <main className="relative min-h-screen overflow-x-hidden">
        {/* Background Effects */}
        <div className="absolute -top-28 -left-28 w-[400px] h-[750px] bg-gradient-to-tr from-blue-700/30 via-purple-800/20 to-cyan-500/20 rounded-full blur-[70px]"></div>
        <div className="absolute -top-28 -right-28 w-[400px] h-[400px] bg-gradient-to-tr from-blue-700 via-purple-800/20 to-cyan-500/20 rounded-full blur-[100px]"></div>

        {/* Components */}
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <Brochure />

        {/* Routes */}
        <div className="overflow-hidden">
          <AnimatedRoutes />
        </div>

        <Footer />

        {/* Bottom Slide Popup */}
        <GetInTouch isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </Router>
  );
}

export default App;
