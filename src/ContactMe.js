/*
 * File Name: ContactMe.js
 * Student Name: Muskaan Saini
 * Student ID: 301420345
 * Date: 04/10/2024
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactMe.css';

function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: ''
    });
  };

  const validateForm = () => {
    const errors = {};
    const { firstName, lastName, contactNumber, email, message } = formData;

    if (!firstName) errors.firstName = "First name is required.";
    if (!lastName) errors.lastName = "Last name is required.";
    if (!contactNumber) {
      errors.contactNumber = "Contact number is required.";
    } else if (!/^\d+$/.test(contactNumber)) {
      errors.contactNumber = "Contact number must be numeric.";
    }
    if (!email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid.";
    }
    if (!message) errors.message = "Message cannot be empty.";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <div className="contact-info">
        <p>Email: sainimuskaan022@gmail.com</p>
        <p>Phone: 437-873-0031</p>
        <p>Address: Toronto, Ontario, Canada</p>
      </div>
      {isSubmitted && <p className="success-message">Message sent successfully!</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />
        {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />
        {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
        <input 
          type="tel" 
          name="contactNumber" 
          placeholder="Contact Number" 
          value={formData.contactNumber} 
          onChange={handleChange} 
          required 
        />
        {formErrors.contactNumber && <span className="error">{formErrors.contactNumber}</span>}
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
        <textarea 
          name="message" 
          placeholder="Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>
        {formErrors.message && <span className="error">{formErrors.message}</span>}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactMe;
