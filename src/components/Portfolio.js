import React, { useState, useMemo } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = useMemo(() => [
    {
      id: 1,
      category: 'fullstack',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'JWT'],
      image: '/img/portfolio/JobTracker.png',
      title: 'Job Tracker',
      description:
        'Full-stack MERN job portal with role-based dashboards, JWT auth, Cloudinary uploads, and a custom Tiptap rich-text editor. Deployed on Vercel + Render.',
      link: 'https://jobs-tracking.vercel.app',
    },
    {
      id: 2,
      category: 'fullstack',
      tags: ['Next.js', 'Express', 'MongoDB', 'Cloudinary'],
      image: '/img/portfolio/Blog.png',
      title: 'Blog Website',
      description:
        'Full-stack blogging platform with JWT auth, slug-based URLs, pagination, search, sort, soft-delete, and Cloudinary + Multer image uploads.',
      link: 'https://blog-frontend-ruby-eight.vercel.app',
    },
    {
      id: 3,
      category: 'fullstack',
      tags: ['React', 'Next.js', 'PostgreSQL'],
      image: '/img/portfolio/Nexycare.png',
      title: 'Nexycare Diagnostics',
      description:
        'Healthcare web app for lab test pricing, doctor availability, and inventory. Built the frontend with React, Next.js, and shadcn/ui at Central Apps.',
      link: 'https://github.com/NirmalKumar12345/nexycare',
    },
    {
      id: 4,
      category: 'fullstack',
      tags: ['React', 'Next.js', 'MySQL'],
      image: '/img/portfolio/Stock-Port.png',
      title: 'Stock Port',
      description:
        'Finance management web app with modules for accounts, ledgers, tax lots, and transactions. Built with React, Next.js, shadcn/ui, REST APIs + MySQL.',
      link: 'https://github.com/NirmalKumar12345/stock-port',
    },
    {
      id: 5,
      category: 'frontend',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '/img/portfolio/TravelWebApp.png',
      title: 'Travel Website',
      description:
        'Fully responsive travel site built with HTML, CSS, and JavaScript. Features destination highlights, image galleries, and smooth navigation.',
      link: 'https://github.com/NirmalKumar12345/TravelWebapp',
    },
    {
      id: 6,
      category: 'frontend',
      tags: ['React', 'CSS'],
      image: '/img/portfolio/ecommerce.png',
      title: 'Mini E-commerce',
      description:
        'Modern e-commerce frontend in React with mobile-friendly product listings, detail pages, shopping cart, and search.',
      link: 'https://github.com/NirmalKumar12345/ecommerce-frontendweb',
    },
    {
      id: 7,
      category: 'frontend',
      tags: ['HTML', 'CSS', 'JavaScript'],
      image: '/img/portfolio/Video conference.png',
      title: 'Video Conference',
      description:
        'Simple video conferencing web app using HTML, CSS, and JavaScript with real-time communication features.',
      link: 'https://github.com/NirmalKumar12345/a42-group5',
    },
    {
      id: 8,
      category: 'other',
      tags: ['Python', 'Tkinter', 'MySQL'],
      image: '/img/portfolio/HotelManagement.png',
      title: 'Hotel Management',
      description:
        'Desktop hotel management system using Python + Tkinter for the UI and MySQL for storing bookings and room availability.',
      link: 'https://github.com/NirmalKumar12345/Hotel-Management',
    },
    {
      id: 9,
      category: 'other',
      tags: ['Python', 'Tkinter', 'MySQL'],
      image: '/img/portfolio/Quize Game.png',
      title: 'Quiz Game',
      description:
        'Interactive quiz game built with Python + Tkinter and MySQL for storing questions, scores, and player history.',
      link: 'https://github.com/NirmalKumar12345/Quize-Game',
    },
    {
      id: 10,
      category: 'other',
      tags: ['Power BI', 'Excel'],
      image: '/img/portfolio/HealthCare Analysis.png',
      title: 'Healthcare Analysis',
      description:
        'Healthcare data analysis with Power BI and Excel — organizing, visualizing, and analyzing health data to support decision-making.',
      link: 'https://github.com/NirmalKumar12345/Health-analysis',
    },
  ], []);

  const filters = [
    { key: 'all', label: 'All', icon: 'bx bx-grid-alt' },
    { key: 'fullstack', label: 'Full Stack', icon: 'bx bx-layer' },
    { key: 'frontend', label: 'Frontend', icon: 'bx bx-code-alt' },
    { key: 'other', label: 'Other', icon: 'bx bx-rocket' },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="main-text">
        <h2 className="heading text-2xl font-bold">Project Portfolio</h2>
        <span>Outcome of My Skills</span>
      </div>

      <div className="portfolio-filters">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`portfolio-filter ${activeFilter === f.key ? 'active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            <i className={f.icon}></i>
            <span>{f.label}</span>
            <span className="filter-count">
              {f.key === 'all'
                ? portfolioItems.length
                : portfolioItems.filter(p => p.category === f.key).length}
            </span>
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <article key={item.id} className="project-card">
            <div className="project-img">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="project-overlay">
                <a
                  href={item.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${item.title}`}
                >
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>

            <div className="project-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="project-tags">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>

              <a
                href={item.link}
                className="project-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </article>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="portfolio-empty">No projects in this category yet.</p>
      )}
    </section>
  );
};

export default Portfolio;
