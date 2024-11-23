import React, { useState, useEffect } from "react";
import axios from "axios";
import './NaPaithyam.css';
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import useStickyNavbar from "../../hooks/useStickyNavbar";

const NaPaithyam = () => {
  useStickyNavbar();

  const [activeSection, setActiveSection] = useState('videos');
  const [quotes, setQuotes] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://teaching-learning-backend.onrender.com/get-quotes"
      );
      if (response.data.status === "Ok") {
        setQuotes(response.data.data || []); // Set quotes or fallback to an empty array
        setError(null);
      } else {
        setError("Failed to fetch quotes. Invalid response from server.");
      }
    } catch (error) {
      setError("An unexpected error occurred: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === 'quotes') {
      fetchQuotes();
    }
  };

  return (
    <>
      <NavBar />
      <main className="na-paithyam-main">
        <h1 className="main-heading">Welcome to NaaPaithyam</h1>
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
            {loading ? (
              <p>Loading quotes...</p>
            ) : error ? (
              <p className="error-text">{error}</p>
            ) : (
              <div className="quotes-main">
                {quotes.map((quote, index) => (
                  <div className="quote-card" key={index}>
                    <h3 className="quote-title">{quote.title}</h3>
                    <p className="quote-text">"{quote.text}"</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default NaPaithyam;
