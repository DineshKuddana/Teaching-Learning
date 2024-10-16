import React, { useState } from "react";
import './NaPaithyam.css';
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useStickyNavbar from "../../hooks/useStickyNavbar";

const NaPaithyam = () => {
  useStickyNavbar();
  // State to manage active section: 'videos' or 'quotes'
  const [activeSection, setActiveSection] = useState('videos');

  // Videos data
  const videos = [
    {
      src: "https://www.youtube.com/embed/WCVY8SyR1yU?si=bj9miUnGiMDqNMBw",
      title: "Video 1",
      description: "This video explains the importance of Intermediate Education, What are the tests related to Engineering admission, How to select an Engineering College, How to Select a Branch of Engineering, etc."
    },
    {
      src: "https://www.youtube.com/embed/c4R3qmF6oeQ?si=IyYme20tOeT9kr9-",
      title: "Video 2",
      description: "The video is about how to prepare your presentation for Ph.D viva voce, how to answer the questions, how to prepare psychologically, and how to control your emotions and answering questions politely, how to say don't know the answer, etc."
    },
    {
      src: "https://www.youtube.com/embed/f7vw1EcAROw?si=Iq_Fb6zyNgAZF4p9",
      title: "Video 3",
      description: "What is a problem in general. Characteristics of the problem. Identify problem. This is made as part of the course Problem Solving and Computer Programming using C."
    },
    {
      src: "https://www.youtube.com/embed/OzLH2_KHjRk?si=dCoFgVC9mFec7Z5C",
      title: "Video 4",
      description: "Advanced problem-solving techniques in computer programming using C."
    },
    {
      src: "https://www.youtube.com/embed/MosfC3NYSbc?si=kgPSbqn-eqpbKwwh",
      title: "Video 5",
      description: "In-depth analysis of algorithm design and optimization."
    },
    {
      src: "https://www.youtube.com/embed/uWFdnTooMl8?si=jkZATo2YmTDxQdrm",
      title: "Video 6",
      description: "Exploring data structures and their applications in real-world scenarios."
    }
  ];

  // Quotes data
  const quotes = [
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela"
    },
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein"
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    }
  ];

  // Handler to switch sections
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <NavBar />
      <main className="na-paithyam-main">
        {/* Main Heading */}
        <h1 className="main-heading">Welcome to NaaPaithyam</h1>

        {/* Section Buttons */}
        <div className="section-buttons">
          <button
            className={`section-button ${activeSection === 'videos' ? 'active' : ''}`}
            onClick={() => handleSectionChange('videos')}
          >
            Videos
          </button>
          <button
            className={`section-button ${activeSection === 'quotes' ? 'active' : ''}`}
            onClick={() => handleSectionChange('quotes')}
          >
            Quotes
          </button>
        </div>

        {/* Conditional Rendering */}
        {activeSection === 'videos' ? (
          <section className="video-section">
            <h2 className="section-heading">Diverse Insights</h2>
            <div className="video-main">
              {videos.map((video, index) => (
                <div className="video-card" key={index}>
                  <iframe
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="quotes-section">
            <h2 className="section-heading">Inspirational Quotes</h2>
            <div className="quotes-main">
              {quotes.map((quote, index) => (
                <div className="quote-card" key={index}>
                  <p className="quote-text">"{quote.text}"</p>
                  <p className="quote-author">- {quote.author}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default NaPaithyam;
