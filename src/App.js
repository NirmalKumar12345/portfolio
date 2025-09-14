import React, { useEffect } from 'react';
import './App.css';
import './Portfolio.css';
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
    // Add scroll progress indicator
    const updateScrollProgress = () => {
      const progress = document.getElementById('progress');
      const progressValue = document.getElementById('progress-value');
      
      if (progress && progressValue) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressValue.style.background = `conic-gradient(#e6006d ${scrollPercent}%, #d7d7d7 ${scrollPercent}%)`;
        
        if (scrollTop > 100) {
          progress.style.display = 'grid';
        } else {
          progress.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
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
