import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home/home';
import { motion, AnimatePresence } from 'motion/react';
import MagicCircle from './assets/magic_circle.gif';
import LandingGif from './assets/landing_page.gif';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showHome, setShowHome] = useState(false);  
  const [showLandingPage, setShowLandingPage] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(true); 
      setTimeout(() => {
        setShowSplash(false); 
      }, 100);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => {
        setShowLandingPage(false); 
        setShowHome(true);
      }, 2000); 
    }
  }, [showSplash]);

  useEffect(() => {
    if (showLandingPage) {
      setTimeout(() => {
        setShowLandingPage(false); 
        setShowHome(true);
      }, 3000); 
    }
  }, [showLandingPage]);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            className="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={MagicCircle} alt="Summoning" className="splash-gif" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showLandingPage && (
          <motion.div
            className="landing-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={LandingGif}
              alt="Landing"
              className="landing-gif"
            />
            <h1 className="landing-text">Hi There, Welcome to my page</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {showHome && (
        <motion.div
          className="home-container home-fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Home />
        </motion.div>
      )}
    </>
  );
}

export default App;
