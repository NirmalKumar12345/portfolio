import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      title: "Main Skills",
      content: [
        {
          title: "Web & User Interface Design - Development",
          experience: "Experience: 1 year+ in Central Apps (Present)",
        },
        {
          title: "Data Analyst",
          experience: "Experience : 3 months - Course.",
        },
        {
          title: "Backend Development -Seval software solution",
          experience: "Experience : 1 month- Intern",
        },
      ],
    },
    {
      title: "Certification",
      content: [
        {
          title: "Python Basic to Advance Concept",
          experience: "Pantech E-Learning",
        },
        {
          title: "Workshop on Full Stack Development",
          experience: "Elysium Academy",
        },
        {
          title: "Data Analyst",
          experience: "Oranium Tech",
        },
      ],
    },
    {
      title: "Education",
      content: [
        {
          title: "Higher Secondary School [81%]",
          experience: "K.C.Sankaralinga Nadar Higher Secondary school",
        },
        {
          title: "Bachelor's Degree in Electronics & Communication [CGPA-8.32]",
          experience: "St Joseph College of Engineering",
        },
        {
          title: "Work Experience in Central Apps",
          experience: "Software Developer -(Aug-2-24 - Present)",
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
          Software Developer (Aug 2024 – Present)
        </h3>
        <p>
          As a dedicated Software Developer with over 1 year and 2 months of
          specialized experience in front-end web development, I am now
          expanding my expertise to the back end, delving into server-side
          programming to build comprehensive full-stack solutions.
        </p>
        <p>
          Leveraging my knowledge of Database Management, TypeScript, React,
          JavaScript, HTML/CSS, and Node.js, I strive to bridge the gap between
          design and technical implementation, ensuring seamless functionality
          and a dynamic presence on the web.
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
