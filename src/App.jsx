import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/home/home';
import { motion, AnimatePresence } from 'motion/react';
import MagicCircle from './assets/magic_circle.gif';
import LandingGif from './assets/landing_page.gif'; // Your landing gif path

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showHome, setShowHome] = useState(false);  // New state to trigger Home page display
  const [showLandingPage, setShowLandingPage] = useState(false); // Landing page state

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLandingPage(true); // Trigger white flash
      setTimeout(() => {
        setShowSplash(false); // Hide splash screen
      }, 100); // splash screen duration
    }, 1500); // delay for splash screen

    return () => clearTimeout(timer);
  }, []);

  // This useEffect handles transitioning to Home after flash effect
  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => {
        setShowLandingPage(false); // End the flash effect
        setShowHome(true); // Show Home after flash
      }, 2000); // flash effect duration
    }
  }, [showSplash]);

  useEffect(() => {
    if (showLandingPage) {
      setTimeout(() => {
        setShowLandingPage(false); // Hide landing page
        setShowHome(true); // Show Home after landing page
      }, 3000); // duration of landing page (3 seconds)
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
