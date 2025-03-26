import { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/home/home";
import Resume from "./pages/resume/resume";
import Header from "./components/header";
import Footer from "./components/footer";
import { motion, AnimatePresence } from "motion/react";
import MagicCircle from "./assets/magic_circle.gif";
import LandingGif from "./assets/landing_page.gif";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [showHome, setShowHome] = useState(false); // Corrected this line

  const isLandingOrSplashPage = showSplash || showLandingPage;

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
        setShowHome(true); // Corrected this line
      }, 2000);
    }
  }, [showSplash]);

  useEffect(() => {
    if (showLandingPage) {
      setTimeout(() => {
        setShowLandingPage(false);
        setShowHome(true); // Corrected this line
      }, 3000);
    }
  }, [showLandingPage]);

  return (
    <Router>
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
            <img src={LandingGif} alt="Landing" className="landing-gif" />
            <h1 className="landing-text">Hi There, Welcome to my page</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Routes for Home & Resume */}
      {!isLandingOrSplashPage && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />{" "}
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
