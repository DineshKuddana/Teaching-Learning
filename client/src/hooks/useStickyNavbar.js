// src/hooks/useStickyNavbar.js
import { useEffect } from 'react';

const useStickyNavbar = (threshold = 100) => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const scrollPosition = window.scrollY;

      if (scrollPosition > threshold) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);
};

export default useStickyNavbar;
