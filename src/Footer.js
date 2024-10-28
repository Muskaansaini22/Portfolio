/*
 * File Name: Footer.js
 * Student Name: Muskaan Saini
 * Student ID: 301420345
 * Date: 04/10/2024
 */
import React from 'react';
import './Footer.css'; 
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Muskaan Saini. All rights reserved.</p>
                <div className="social-icons">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
