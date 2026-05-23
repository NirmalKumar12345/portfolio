import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'bx bx-code-alt',
      title: 'Full Stack Web Development',
      description: 'End-to-end web apps with Next.js + Node.js + MongoDB. From component-driven UIs in shadcn/ui to REST APIs, JWT auth, and production deployment on Vercel and Render.',
      link: '#'
    },
    {
      icon: 'bx bx-desktop',
      title: 'Frontend Engineering',
      description: 'Pixel-precise, accessible, responsive interfaces in React, Next.js, TypeScript, and Tailwind CSS. Performance-tuned for fast loads and clean code that other devs can build on.',
      link: '#'
    },
    {
      icon: 'bx bx-server',
      title: 'API & Backend Development',
      description: 'REST APIs in Node.js + Express with structured validation (Zod, express-validator), JWT auth, role-based access, and Cloudinary uploads — built around MongoDB or MySQL.',
      link: '#'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="main-text">
        <h2 className="heading font-bold text-2xl">My Services</h2>
        <span className='text-lg'>what i will do for you</span>
      </div>

      <div className="allServices">
        {services.map((service, index) => (
          <div key={index} className="servicesItem">
            <div className="icon-services">
              <i className={service.icon}></i>
              <span></span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="cta-modern">
        <div className="cta-content">
          <span className="cta-label">Let's collaborate</span>
          <h3>Have a project in mind?</h3>
          <p>
            I'm open to full-time roles, freelance work, and interesting
            collaborations. If you're hiring or have an idea worth building,
            let's talk.
          </p>
          <div className="cta-actions">
            <a
              href="mailto:nirmal6054@gmail.com"
              className="btn"
            >
              Email Me <i className="bx bx-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nirmal-kumar-g-996b43281"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Message on LinkedIn <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="cta-stats">
          <div className="cta-stat">
            <span className="cta-stat-num">1.5+</span>
            <span className="cta-stat-label">Years experience</span>
          </div>
          <div className="cta-stat">
            <span className="cta-stat-num">10+</span>
            <span className="cta-stat-label">Projects shipped</span>
          </div>
          <div className="cta-stat">
            <span className="cta-stat-num">2</span>
            <span className="cta-stat-label">Production clients</span>
          </div>
        </div>
      </div>

      <div className="showcase">
        <img src="/shapes/ring.png" className="ring" alt="Ring shape" />
        <img src="/shapes/circle.png" className="circle" alt="Circle shape" />
        <img src="/shapes/circle.png" className="circle2" alt="Circle shape" />
        <img src="/shapes/circle.png" className="circle3" alt="Circle shape" />
        <img src="/shapes/half-ring.png" className="half-ring" alt="Half ring shape" />
      </div>
    </section>
  );
};

export default Services;