import React, { useState } from 'react';
import './Contact.css';

import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';  


const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  // Make handleSubmit async
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    Object.keys(formState).forEach((key) => {
      formData.append(key, formState[key]);
    });

    try {
      console.log("Submitting form data:", formData);
      const result = await axios.post("http://localhost:5000/upload-data", formState, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("Response data:", result.data);

      if (result.data.status === "Ok") {
        alert("Form submitted successfully!");
        setFormState({
          name: "",
          email:"",
          message:""
        });
        document.querySelector(".contact-form").reset();
      } else {
        alert("Error submitting form: " + result.data.status);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred: " + error.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2 className="contact-heading">Get in Touch</h2>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formState.name} 
            onChange={handleChange} 
            required 
          />
          
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formState.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="message">Message:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            value={formState.message} 
            onChange={handleChange} 
            required 
          />
          
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
