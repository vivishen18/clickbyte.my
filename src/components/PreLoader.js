import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import './PreLoader.css';
import fullLogo from '../assets/fulllogo.png';

const Preloader = () => {
  const [fadeAway, setFadeAway] = useState(false);
  const history = useNavigate ();

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeAway(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (fadeAway) {
      history.push('/'); // Redirect to home page after fade-away
    }
  };

  return (
    <div className={`preloader ${fadeAway ? 'fade-out' : ''}`} onTransitionEnd={handleTransitionEnd}>
      <img src={fullLogo} alt="Logo" className="logo" />
      <div className="spinner"></div>
    </div>
  );
};

export default Preloader;
