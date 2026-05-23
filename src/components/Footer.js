import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <p>© 2026 <span>Nirmal Kumar G</span> · Full Stack Developer · All Rights Reserved.</p>
      </footer>

      <div id="progress" onClick={scrollToTop}>
        <span id="progress-value">
          <i className='bx bxs-chevrons-up'></i>
        </span>
      </div>
    </>
  );
};

export default Footer;