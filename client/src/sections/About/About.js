import React from 'react';
import './About.css';  
import NavBar from '../../components/Navbar/Navbar';

const About = () => {
    return (
        <>
        <NavBar/>
        <header className="about-header">
            <div className="container">
                <h1 className="about-title">Chenna Reddy</h1>
                <p className="about-subtitle">
                    విద్యార్థి, గురువు, రచయిత, దార్శనిక, మానస్తత్వవేత | Perpetual student, passionate teacher, 
                    dedicated author, contemplative philosopher, Psychologist, and more | छात्र, शिक्षक, लेखक, 
                    दार्शनिक, मनोविद, आदि...
                </p>
            </div>
        </header>
        </>
    );
};

export default About;
