import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
      const { pathname } = useLocation();

      useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth', // Use 'smooth' for a smooth scroll animation
        });
      }, [pathname]); // Re-run effect when pathname changes

      return null; // This component doesn't render any UI
    }

export default ScrollToTop;