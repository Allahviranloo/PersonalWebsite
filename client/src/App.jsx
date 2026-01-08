import React, { useState } from 'react';
import './App.css';
import rambleImg from './ramble_logo.jpg';
import taskImg from './taskmanagerlogo.png';
import profileImg from './IMG_3509.jpeg'; 

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Ramble",
      description: "A dynamic social media platform designed for real-time community engagement and seamless user interaction.",
      link: "https://github.com/Allahviranloo/Ramble",
      image: rambleImg
    },
    {
      title: "Serverless Data Processor",
      description: "A backend system that processes large chunks of data automatically without needing a dedicated server 24/7.",
      link: "https://github.com/Allahviranloo/Serverless-Data-Processor.git",
      image: null
    },
    {
      title: "React Task Manager",
      description: "A sleek productivity app that helps users organize their daily tasks with real-time updates.",
      link: "https://github.com/Allahviranloo/Task-Manager.git",
      image: taskImg
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const project = projects[currentIndex];

  return (
    <div className="portfolio">
      <header className="hero">
        <div className="profile-container">
          <img src={profileImg} alt="Sahand Allahviranlou" className="profile-pic" />
        </div>
        <h1>Sahand Allahviranlou</h1>
        <p>Developer | Cybersecurity Enthusiast</p>
      </header>

      <section className="section about">
        <div className="content-card">
          <h2>About Me</h2>
          <p>
            I'm a developer focused on building clean, efficient applications
            that bridge the gap between complex backend logic and user-friendly frontends.
            I'm aspiring to be a cybersecurity professional, working as a cybersecurity engineer.
          </p>
        </div>
      </section>

      <section className="section projects">
        <h2>My Work</h2>
        <div className="slider-container">
          <button className="nav-btn prev" onClick={prevProject}>&lt;</button>
          
          <div className="project-card active-slide" key={currentIndex}>
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className={`project-img ${project.title === "React Task Manager" ? "task-manager-logo" : ""}`} 
              />
            ) : (
              <div className="project-img-placeholder">Code Only Project</div>
            )}
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Source</a>
            </div>
          </div>

          <button className="nav-btn next" onClick={nextProject}>&gt;</button>
        </div>
        
        <div className="dot-container">
          {projects.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </section>

      <footer className="section contact">
        <div className="content-card">
          <h2>Let's Connect</h2>
          <div className="social-links">
            <a href="https://github.com/Allahviranloo" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/38bdf8/github.png" alt="GitHub" className="social-icon" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sahand-allahviranlou-25560536a/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="LinkedIn" className="social-icon" />
              LinkedIn
            </a>
            <a href="mailto:a8qbn@unb.ca">
              <img src="https://img.icons8.com/color/48/000000/microsoft-outlook-2019.png" alt="Outlook" className="social-icon" />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;