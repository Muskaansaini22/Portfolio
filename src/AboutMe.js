/*
 * File Name: AboutMe.js
 * Student Name: Muskaan Saini
 * Student ID: 301420345
 * Date: 04/10/2024
 */
import React from 'react';
import './AboutMe.css'; 

const AboutMe = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="profile-section">
        <img src="/profile.jpg" alt="Muskaan Saini" className="profile-image" />
        <div className="profile-description">
          <p>
            Hello! I'm <strong>Muskaan Saini</strong>, a dedicated software developer based in Toronto. 
            I specialize in building web applications using modern technologies like <strong>React</strong> and <strong>Node.js</strong>.
          </p>
          <a href="/resume.docx" download rel="noopener noreferrer">
            <button className="resume-button">Download My Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
