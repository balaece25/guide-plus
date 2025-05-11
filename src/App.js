import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar'
import Login from './components/Login';
import TermsDialog from './components/TermsDialog';
import AboutPage from './components/AboutPage';
import Questionnaire from './components/Questionnaire';
import './App.css';

function App() {
   const [user, setUser] = useState(null); // Track logged-in user   
  const [showTerms, setShowTerms] = useState(false); // Control terms dialog
  const [termsAccepted, setTermsAccepted] = useState(false); // Track if terms are accepted

  const handleLogin = (username) => {
    setUser({ username });
    setShowTerms(true);
  };

  const handleTermsAccept = () => {
     setShowTerms(false);
    setTermsAccepted(true); // Set terms as accepted
  };

  const handleTermsDecline = () => {
    setShowTerms(false);
    setUser(null); // Log out if terms are declined
    setTermsAccepted(false); // Reset terms acceptance
  };

  const handleLogout = () => {
    setUser(null);
     setTermsAccepted(false); // Reset terms acceptance on logout
  };


  return (
      <Router>
      <div className="App">
        {!user ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <Navbar user={user} onLogout={handleLogout} />
            <Routes>
                 {termsAccepted ? (
                <>
              <Route path="/" element={<LandingPage />} />
              <Route path="/questionnaire/:category" element={<Questionnaire />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Navigate to="/" />} />
              </> ) : (
                <Route path="*" element={<Navigate to="/" />} />
              )}
            </Routes>
            <TermsDialog
              show={showTerms}
              onAccept={handleTermsAccept}
              onDecline={handleTermsDecline}
            />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
