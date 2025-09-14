import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      category: 'uiux',
      image: '/img/portfolio/TravelWebApp.png',
      title: 'Travel Website',
      description: 'I created a travel website using HTML, CSS, and JavaScript. The site is fully responsive, featuring a user-friendly design with interactive elements like destination highlights, image galleries, and smooth navigation to enhance the user experience.',
      link: 'https://github.com/NirmalKumar12345/TravelWebapp'
    },
    {
      id: 2,
      category: 'web',
      image: '/img/portfolio/Nexycare.png',
      title: 'Nexycare Diagnostics',
      description: 'I built a web app to simplify healthcare diagnostics and enhance patient care. It helps analyze health data, track blood availability in nearby hospitals, and find doctors based on their roles, availability, and status. The platform also streamlines lab testing by identifying potential diseases, analyzing results, and displaying test costs with discounts.',
      link: 'https://github.com/NirmalKumar12345/nexycare'
    },
    {
      id: 3,
      category: 'branding',
      image: '/img/portfolio/HotelManagement.png',
      title: 'Hotel Management',
      description: 'I developed a simple hotel management system using Python with Tkinter for the interface and MySQL to store room status data, making it easy to manage bookings and room availability.',
      link: 'https://github.com/NirmalKumar12345/Hotel-Management'
    },
    {
      id: 4,
      category: 'web',
      image: '/img/portfolio/Quize Game.png',
      title: 'Quiz Game',
      description: 'I developed a simple quiz game using Python with Tkinter for the interface and MySQL for storing questions and tracking score',
      link: 'https://github.com/NirmalKumar12345/Quize-Game'
    },
    {
      id: 5,
      category: 'web',
      image: '/img/portfolio/Video conference.png',
      title: 'Video Conference',
      description: 'I created a simple video conferencing web application using HTML, CSS, and JavaScript, allowing users to connect and communicate seamlessly in real-time.',
      link: 'https://github.com/NirmalKumar12345/a42-group5'
    },
    {
      id: 6,
      category: 'uiux',
      image: '/img/portfolio/HealthCare Analysis.png',
      title: 'Healthcare Analysis',
      description: 'Healthcare analysis I worked on healthcare data analysis using Power BI and Excel, where I organized, visualized, and analyzed health data to uncover trends, track patient outcomes, and support data-driven decision-making in healthcare settings.',
      link: 'https://github.com/NirmalKumar12345/Health-analysis'
    },
    {
      id: 7,
      category: 'web',
      image: '/img/portfolio/Stock-Port.png',
      title: 'Stock Port',
      description: 'Developed a finance management web app with modules for accounts, ledgers, tax lots, and transactions. Built using React, Next.js, and shadcn/ui for modern UI, with backend powered by REST APIs and MySQL.',
      link: 'https://github.com/NirmalKumar12345/stock-port#'
    },
    {
      id: 8,
      category: 'web',
      image: '/img/portfolio/ecommerce.png',
      title: 'Mini Ecommerce',
      description: 'I built a modern e-commerce website frontend using React.js. It has a mobile-friendly design with product listings, product detail pages, a shopping cart and a search bar. I focused on making it easy to use, visually appealing and well-organized.',
      link: 'https://github.com/NirmalKumar12345/ecommerce-frontendweb'
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2 className="heading text-2xl font-bold">Project Portfolio</h2>
        <span>Outcome of My Skills</span>
      </div>

      <div className="portfolio-gallery">
        {portfolioItems.map((item) => (
          <div key={item.id} className={`portfolio-box mix ${item.category}`}>
            <div className="portfolio-content">
              <div className="portfolio-img">
                <img src={item.image} alt={item.title} />
              </div>
              <h3 style={{ textAlign: 'center' }}>{item.title}</h3>
              <p>{item.description}</p>
              <a 
                href={item.link} 
                className="readMore" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Examine!
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;