import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'bx bx-code-alt',
      title: 'Web Development',
      description: 'Web development services help you build custom websites that are fast, user-friendly, and designed to meet your specific business goals.',
      link: '#'
    },
    {
      icon: 'bx bx-desktop',
      title: 'UI / UX Designs',
      description: 'Great web design focuses on creating beautiful, easy-to-navigate websites that showcase your brand and connect with your audience, keeping them engaged and coming back for more.',
      link: '#'
    },
    {
      icon: 'bx bx-layer',
      title: 'Data Analyst',
      description: 'Effective data analysis turns raw data into valuable insights, helping businesses make informed decisions and uncover growth opportunities. A skilled data analyst focuses on identifying patterns, solving problems, and driving data-driven strategies.',
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
            <a href={service.link} className="readMore">Click Me</a>
          </div>
        ))}
      </div>

      <div className="proposal" style={{ height: '800px' }}>
        <div className="text-box">
          <span>Get It Touch</span>
          <h3>Have a Project On Your Mind</h3>
          <a href="https://www.linkedin.com/in/nirmal-kumar-g-996b43281" className="btn">Contact Me</a>
        </div>
        <img src="/img/My.png" className="first" alt="Nirmal Kumar" />
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