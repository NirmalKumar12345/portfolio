import React, { useEffect } from 'react';
import './App.css';
import './Portfolio.css';
import './theme.css';
import 'boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // ----- Scroll progress indicator -----
    const updateScrollProgress = () => {
      const progress = document.getElementById('progress');
      const progressValue = document.getElementById('progress-value');

      if (progress && progressValue) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        // Force !important so no CSS rule can override the live conic-gradient
        progressValue.style.setProperty(
          'background',
          `conic-gradient(#6366F1 ${scrollPercent}%, #1E293B ${scrollPercent}%)`,
          'important'
        );

        if (scrollTop > 100) {
          progress.style.setProperty('display', 'grid', 'important');
        } else {
          progress.style.setProperty('display', 'none', 'important');
        }
      }
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    // Run once on mount so the gradient is initialized even before the user scrolls
    updateScrollProgress();

    // ----- Scroll-reveal animations via IntersectionObserver -----
    // Auto-tag the major section elements so we don't need to edit each component.
    const revealSelectors = [
      '.about-content',
      '.about-img',
      '.services .main-text',
      '.portfolio .main-text',
      '.skills-modern .main-text',
      '.contact-modern .main-text',
      '.cta-modern',
      '.footer-modern .footer-col',
    ];
    const staggerSelectors = [
      '.allServices',
      '.portfolio-grid',
      '.skill-groups',
      '.cta-stats',
    ];

    revealSelectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => el.classList.add('reveal'));
    });
    staggerSelectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => el.classList.add('reveal', 'stagger'));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div className="overlay"></div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <ToastContainer 
        position="bottom-right" 
        autoClose={3000} 
      />
    </div>
  );
}

export default App;
