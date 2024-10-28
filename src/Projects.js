/*
 * File Name: Projects.js
 * Student Name: Muskaan Saini
 * Student ID: 301420345
 * Date: 04/10/2024
 */
import React from 'react';
import './Projects.css'; 

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-list">
        <div className="project">
          <img src="/project1.jpeg" alt="Project 1" className="project-image" />
          <h2>Portfolio Website</h2>
          <p>Developed a modern personal portfolio website using React and deployed on Netlify.</p>
        </div>

        <div className="project">
          <img src="/project2.jpeg" alt="Project 2" className="project-image" />
          <h2>E-commerce Website</h2>
          <p>Built a full-stack e-commerce application using Node.js and MongoDB for database management.</p>
        </div>

        <div className="project">
          <img src="/project3.jpeg" alt="Project 3" className="project-image" />
          <h2>Blog Platform</h2>
          <p>Created a blog platform using React and Firebase for real-time data updates and user authentication.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
