import React, { useEffect, useRef } from "react";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current;
      const textContent = text.textContent;
      text.innerHTML = textContent
        .split("")
        .map(
          (char, i) => `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
        )
        .join("");
    }
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'img/Resume-IT.pdf';
    link.download = 'Nirmal_Resume.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home" id="home">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-6xl mx-auto py-12 px-4">
        {/* Left: Hero Text */}
        <div className="hero-info flex-1 text-left md:pr-12">
          <h3 className="text-left text-gray-500 text-lg mb-2">WELCOME</h3>
          <h1 className="font-bold text-5xl md:text-6xl mb-2 text-left">
            Hi I'm <span className="text-fuchsia-600">N</span>irmal
          </h1>
          <div className="text-animate text-left mb-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-fuchsia-700">
              Software Developer
            </h2>
          </div>
          <p className="text-left max-w-xl text-gray-500 mb-6">
            A passionate Software Developer with strong expertise in React,
            Next.js and modern frontend technologies. I love turning complex
            ideas into user-friendly, pixel-perfect interfaces. When I’m not
            coding, I'm exploring the latest web trends or mentoring aspiring
            developers.
          </p>
          <div className="btn-box flex gap-4 mb-6">
            <a
              href="mailto:nirmal6054@gmail.com"
              className="btn bg-gradient-to-r from-fuchsia-600 to-blue-500 text-white px-6 py-2 rounded shadow hover:scale-105 transition"
            >
              Hire Me Now! <i className="bx bx-right-arrow-alt"></i>
            </a>
            <button
              onClick={handleDownloadCV}
              className="btn d-CV bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-100 transition"
            >
              Download CV <i className="bx bx-download"></i>
            </button>
          </div>
          <div className="social-media flex gap-6">
            <div className="bg-icon">
              <a href="https://www.linkedin.com/in/nirmal-kumar-g-996b43281">
                <i className="bx bxl-linkedin"></i>
              </a>
              <span></span>
            </div>
            <div className="bg-icon">
              <a href="https://github.com/NirmalKumar12345">
                <i className="bx bxl-github"></i>
              </a>
              <span></span>
            </div>
            <div className="bg-icon">
              <a href="https://www.instagram.com/_nirmal_._kumar_/#">
                <i className="bx bxl-instagram"></i>
              </a>
              <span></span>
            </div>
            <div className="bg-icon">
              <a href="mailto:nirmal6054@gmail.com">
                <i className="bx bxl-gmail"></i>
              </a>
              <span></span>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="img-hero">
          <img
            src="img/Myself.png"
            alt="Nirmal Kumar"
            className="w-40 h-40 md:w-[20px] md:h-[30px] lg:w-[20px] lg:h-[30px] relative top-8 md:top-[70px] mx-auto"
          />
          <div className="rotate-text">
            <div className="text">
              <p ref={textRef}>I'm Software Developer I'm Designer</p>
            </div>
            <span>
              <i></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
