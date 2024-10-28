/*
 * File Name: App.js
 * Student Name: Muskaan Saini
 * Student ID: 301420345
 * Date: 04/10/2024
 */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Services from './Services';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import ContactMe from './ContactMe';
import './style.css'; 

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
