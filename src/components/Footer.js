import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer>
        <p>Copyright © 2024 by <span>Nirmal Kumar</span> || All Right Reserved.</p>
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