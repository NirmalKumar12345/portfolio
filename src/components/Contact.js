import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const skillGroups = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: 'bx bxl-react' },
        { name: 'Next.js', icon: 'bx bxl-bx' },
        { name: 'TypeScript', icon: 'bx bxl-typescript' },
        { name: 'JavaScript', icon: 'bx bxl-javascript' },
        { name: 'Tailwind CSS', icon: 'bx bxl-tailwind-css' },
        { name: 'shadcn/ui', icon: 'bx bx-component' },
        { name: 'HTML5', icon: 'bx bxl-html5' },
        { name: 'CSS3', icon: 'bx bxl-css3' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'bx bxl-nodejs' },
        { name: 'Express.js', icon: 'bx bx-server' },
        { name: 'REST APIs', icon: 'bx bx-link' },
        { name: 'JWT Auth', icon: 'bx bx-shield-quarter' },
        { name: 'Cloudinary', icon: 'bx bx-cloud' },
        { name: 'Multer', icon: 'bx bx-upload' },
        { name: 'Python', icon: 'bx bxl-python' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: 'bx bxl-mongodb' },
        { name: 'MySQL', icon: 'bx bxs-data' },
        { name: 'Mongoose', icon: 'bx bx-data' },
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git', icon: 'bx bxl-git' },
        { name: 'GitHub', icon: 'bx bxl-github' },
        { name: 'Postman', icon: 'bx bxl-postman' },
        { name: 'Vercel', icon: 'bx bx-cloud-upload' },
        { name: 'Render', icon: 'bx bx-server' },
        { name: 'Bitbucket', icon: 'bx bxl-bitbucket' },
      ],
    },
    {
      title: 'AI-Assisted',
      skills: [
        { name: 'Claude', icon: 'bx bx-bot' },
        { name: 'GitHub Copilot', icon: 'bx bx-code-block' },
        { name: 'ChatGPT', icon: 'bx bx-message-square-dots' },
      ],
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.first_name || !formData.last_name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send("service_af1cszh", "template_p93no8i", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      toast.success('Message sent successfully!');

      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    emailjs.init("fqHmtPpKjXsdWoaM1");
  }, []);

  return (
    <section className="down-box">
      <div className="contact-wrap">
        {/* Skills section first — cleaner flow */}
        <div className="skills-modern" id="skills">
          <div className="main-text">
            <h2 className="heading text-2xl font-bold">Tech Stack & Skills</h2>
            <span>What I work with day-to-day</span>
          </div>

          <div className="skill-groups">
            {skillGroups.map((group, gIdx) => (
              <div key={gIdx} className="skill-group">
                <h3 className="skill-group-title">{group.title}</h3>
                <div className="skill-badges">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-badge">
                      <i className={skill.icon}></i>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact form — anchor for the nav "Contact" link */}
        <div className="contact-modern" id="contact">
          <div className="main-text">
            <h2 className="heading text-2xl font-bold">Let's Build Something</h2>
            <span>Get in touch — I usually reply within a day</span>
          </div>

          <form onSubmit={handleSubmit} className="contact-form-modern">
            <div className="input-row">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="btn-submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
              <i className='bx bx-send'></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
