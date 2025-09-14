import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      const scrollPos = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up body class when component unmounts
      document.body.classList.remove('open');
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    document.body.classList.remove('open');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body class for overlay
    if (!isMenuOpen) {
      document.body.classList.add('open');
    } else {
      document.body.classList.remove('open');
    }
  };

  // Close menu when clicking on overlay
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('open');
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      <div className="overlay" onClick={closeMenu}></div>
      
      <header>
      <button 
        className="logo"
        onClick={() => scrollToSection('home')}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span>G</span> Nirmal <span>K</span>umar
      </button>
      <ul className={`navlist ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#services" 
            className={activeSection === 'services' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
          >
            Services
          </a>
        </li>
        <li>
          <a 
            href="#portfolio" 
            className={activeSection === 'portfolio' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="right-header">
        <a href="https://www.linkedin.com/in/nirmal-kumar-g-996b43281" className="btn">
          Let's chat <i className='bx bx-message-dots'></i>
        </a>
        <div 
          className={`menu-icon ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;