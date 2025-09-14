import React, { useState, useEffect, useMemo } from 'react';
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

  const skills = useMemo(() => [
    { name: 'HTML5', percentage: 100 },
    { name: 'CSS3', percentage: 98 },
    { name: 'JavaScript', percentage: 78 },
    { name: 'Python', percentage: 65 },
    { name: 'React.js', percentage: 85 },
    { name: 'Git & Github', percentage: 90 },
    { name: 'Next.js', percentage: 90 },  
    { name: 'TypeScript', percentage: 80 },
    {name: 'Bit bucket', percentage: 80 },
    { name: 'Tailwind CSS', percentage: 75 },
    { name: 'Node.js', percentage: 70 },
  ], []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      // Send email using EmailJS
      await emailjs.send("service_af1cszh", "template_p93no8i", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      toast.success('Message sent successfully!');
      
      // Reset form
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

  // Function to get gradient colors based on skill name and percentage
  const getGradientColors = (skillName, percentage) => {
    // Define specific colors for each skill to match the original design
    const skillColors = {
      'HTML5': { start: '#f7017d', end: '#630db2' },
      'CSS3': { start: '#f7017d', end: '#630db2' },
      'JavaScript': { start: '#f7017d', end: '#630db2' },
      'Python': { start: '#f7017d', end: '#630db2' },
      'React.js': { start: '#f7017d', end: '#630db2' },
      'Git & Github': { start: '#f7017d', end: '#630db2' }
    };
    
    return skillColors[skillName] || { start: '#f7017d', end: '#630db2' };
  };

  // Animate skill circles on component mount
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("fqHmtPpKjXsdWoaM1");

    const animateSkillCircles = () => {
      const circles = document.querySelectorAll('.skill .progress-circle');
      circles.forEach((circle, index) => {
        const percentage = skills[index]?.percentage || 0;
        const circumference = 2 * Math.PI * 50; // radius = 50
        const strokeDasharray = circumference;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;
        
        // Set initial state
        circle.style.strokeDasharray = strokeDasharray;
        circle.style.strokeDashoffset = circumference;
        
        // Animate the circle
        setTimeout(() => {
          circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
          circle.style.strokeDashoffset = strokeDashoffset;
        }, index * 200);
      });

      // Animate counters
      const counters = document.querySelectorAll('.counter span');
      counters.forEach((counter, index) => {
        const target = skills[index]?.percentage || 0;
        let current = 0;
        const increment = target / 100;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = Math.round(current);
        }, 20);
      });
    };

    const timer = setTimeout(animateSkillCircles, 500);
    return () => clearTimeout(timer);
  }, [skills]);

  return (
    <section className="down-box" id="contact">
      <div className="contactSkills">
        <div className="contact-info">
          <div className="main-text">
            <h2 className="heading text-2xl font-bold">Contact Me</h2>
            <span>get in touch with me</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-box">
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
              cols="30" 
              rows="10" 
              placeholder="Your message..."
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <div className="formBtn">
              <button type="submit" className="btn" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="skills">
          <div className="container">
            <div className="skillBox">
              <div className="main-text">
                <h2 className="heading text-2xl font-bold">My Skills</h2>
                <span>Let me Show You</span>
              </div>
              <div className="skill-wrap">
                {skills.map((skill, index) => {
                  const colors = getGradientColors(skill.name, skill.percentage);
                  return (
                    <div key={index} className="skill">
                      <div className="outer-circle">
                        <div className="inner-circle">
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="110px" height="110px">
                            <defs>
                              <linearGradient id={`GradientColor${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={colors.start} />
                                <stop offset="100%" stopColor={colors.end} />
                              </linearGradient>
                            </defs>
                            <circle 
                              cx="55" 
                              cy="55" 
                              r="50" 
                              strokeLinecap="round" 
                              stroke="#e3edf7"
                              strokeWidth="6"
                              fill="transparent"
                            />
                            <circle 
                              className="progress-circle"
                              cx="55" 
                              cy="55" 
                              r="50" 
                              strokeLinecap="round" 
                              stroke={`url(#GradientColor${index})`}
                              strokeWidth="6"
                              fill="transparent"
                              style={{
                                transform: 'rotate(-90deg)',
                                transformOrigin: '55px 55px'
                              }}
                            />
                          </svg>
                          <h2 className="counter">
                            <span data-target={skill.percentage}>0</span>%
                          </h2>
                        </div>
                      </div>
                      <div className="sk-title">
                        {skill.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;