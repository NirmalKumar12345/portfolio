import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      title: "Experience",
      content: [
        {
          title: "Central Apps — Software Developer",
          experience: "Aug 2024 – Present · 1.5+ yrs · Full-stack (React, Next.js, Node.js, MongoDB)",
        },
        {
          title: "Seval Software Solutions — Backend Intern",
          experience: "Jul 2023 – Aug 2023 · Python, Tkinter, MySQL",
        },
        {
          title: "Self-Driven Projects",
          experience: "Job Tracker (MERN), Blog App (MERN) — deployed on Vercel + Render",
        },
      ],
    },
    {
      title: "Certifications",
      content: [
        {
          title: "Full Stack Development Workshop",
          experience: "Elysium Academy",
        },
        {
          title: "Python Programming — Basic to Advanced",
          experience: "Pantech eLearning",
        },
        {
          title: "Data Analysis & Visualization with Power BI",
          experience: "Oranium Tech",
        },
        {
          title: "Arduino & Cisco Networking Workshops",
          experience: "IIT Bombay · Cisco",
        },
      ],
    },
    {
      title: "Education",
      content: [
        {
          title: "B.E. — Electronics & Communication Engineering",
          experience: "St. Joseph College of Engineering · 2020–2024 · CGPA 8.32",
        },
        {
          title: "Higher Secondary (HSC) — 81%",
          experience: "K.C. Sankaralinga Nadar Hr. Sec. School",
        },
        {
          title: "Secondary (SSLC) — 82%",
          experience: "St. Roque's Matriculation School",
        },
      ],
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-img">
        <div className="showcase-ring">
          <img src="/shapes/ring.png" className="ring" alt="Ring shape" />
          <img src="/shapes/circle.png" className="circle" alt="Circle shape" />
        </div>
      </div>
      <div className="about-content">
        <h2 className="font-bold text-3xl">About Me</h2>
        <h3 className="font-semibold text-2xl">
          Full Stack Developer @ Central Apps
        </h3>
        <p>
          I'm a Software Developer with 1.5+ years of production experience
          building modern web apps with React, Next.js, TypeScript, and
          Tailwind. Day-to-day at Central Apps, I ship full-stack features for
          healthcare (Nexycare) and finance (Stockport) clients.
        </p>
        <p>
          Outside of work, I'm growing my backend skills with Node.js, Express,
          MongoDB, and JWT — and I've shipped two full MERN projects (Job
          Tracker and Blog App) deployed on Vercel and Render. I use Claude,
          GitHub Copilot, and ChatGPT daily for code review and to ship faster
          without cutting corners.
        </p>

        <div className="about-btn">
          {tabContent.map((tab, index) => (
            <button
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="content-btn">
          <div className="content active">
            {tabContent[activeTab].content.map((item, itemIndex) => (
              <div key={itemIndex} className="text-box">
                <p>{item.title}</p>
                <span>{item.experience}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
