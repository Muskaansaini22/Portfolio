/*
 * File Name: Home.js
 * Student Name: Muskaan Saini
 * Student ID: 301420345
 * Date: 04/10/2024
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>Hi, I'm Muskaan Saini, a passionate software developer. Explore my work and learn more about me!</p>
      <p><strong>Mission Statement:</strong> I strive to create innovative, user-friendly applications that help businesses and individuals achieve their goals.</p>
      <Link to="/about">
        <button>Learn More About Me</button>
      </Link>
    </div>
  );
}

export default Home;
