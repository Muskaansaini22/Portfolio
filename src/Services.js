/*
 * File Name: Services.js
 * Student Name: Muskaan Saini
 * Student ID: 301420345
 * Date: 04/10/2024
 */
import React from 'react';
import './Services.css'; 
function Services() {
  return (
    <div className="services">
      <h1>Services I Offer</h1>
      <div className="services-list">
        <div className="service-item">
          <img src="/programming.jpeg" alt="Programming" className="service-image" />
          <h2>General Programming</h2>
          <p>Providing general programming solutions in various languages.</p>
        </div>
        <div className="service-item">
          <img src="/web-development.jpeg" alt="Web Development" className="service-image" />
          <h2>Web Development</h2>
          <p>Creating dynamic and responsive websites using modern frameworks.</p>
        </div>
        <div className="service-item">
          <img src="/mobile-apps.jpeg" alt="Mobile Apps" className="service-image" />
          <h2>Mobile Apps</h2>
          <p>Designing and developing mobile applications for both Android and iOS.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
