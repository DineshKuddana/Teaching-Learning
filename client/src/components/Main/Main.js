import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useStickyNavbar from '../../hooks/useStickyNavbar';
import bulb from '../../images/glowbulb.png'
const MainSection = () => {
  useStickyNavbar();
  return (

        
    <>
    <Header/>
    <NavBar/>
    <main className="main-section">
      <section className="intro-section">
        <h2 className="intro-title">
          <img src={bulb} alt="bulb" width="60px" height="60px"/> Welcome to Chenna Reddy's Knowledge Hub<img src={bulb} alt="bulb" width="60px" height="60px"/>
        </h2>
        <p className="intro-description">
          Embark on a journey of intellectual exploration at the crossroads of technology, psychology, philosophy, financials, and society...
        </p>
      </section>

      <section className="content-section">
        <div className="content-box">
          <div className="box-header">
            <i className="fas fa-newspaper icon"></i>
            <h3>Latest Insights</h3>
          </div>
          <p>
            Stay at the forefront of knowledge with my latest blog posts, articles, videos, and updates...
          </p>
        </div>

        <div className="content-box">
          <div className="box-header">
            <i className="fas fa-user-secret icon"></i>
            <h3>Naa Paithyam</h3>
          </div>
          <p>
            Learn about me. Search yourself in me...
          </p>
        </div>

        <div className="content-box">
          <div className="box-header">
            <i className="fas fa-chalkboard-teacher icon"></i>
            <h3>Interactive Learning</h3>
          </div>
          <p>
            Embark on collaborative learning paths with my courses. From beginner-friendly tutorials to advanced classes and self-learning challenges...
          </p>
        </div>

        <div className="content-box">
          <div className="box-header">
            <i className="fas fa-book icon"></i>
            <h3>Bookshelf</h3>
          </div>
          <p>
            Explore my literary creations in the form of books...
          </p>
        </div>
{/* 
        <div className="content-box">
          <div className="box-header">
            <i className="fas fa-video icon"></i>
            <h3>Video Vault</h3>
          </div>
          <p>
            Immerse yourself in dynamic discussions and visual explorations. Videos are thought-provoking and appeal to your inherent talent...
          </p>
        </div> */}

        <div className="content-box">
          <div className="box-header">
            <i className="fas fa-comments icon"></i>
            <h3>Join the Conversation</h3>
          </div>
          <p>
            Connect with like-minded individuals in the community forum. Share your thoughts, ask questions, and engage in lively discussions...
          </p>
        </div>

     

        <div className="content-box">
          <div className="box-header">
            <i className="fas fa-envelope icon"></i>
            <h3>Get in Touch</h3>
          </div>
          <p>
            Have a burning question or just want to share your thoughts? Reach out through our contact page. I value every interaction; you are precious to me...
          </p>
        </div>
      </section>
    </main>

    <Footer/> 
    </>
  );
};

export default MainSection;
