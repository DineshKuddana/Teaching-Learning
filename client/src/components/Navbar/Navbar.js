import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/home" className={getNavLinkClass("/home")}>Home</Link>
          <Link to="/about" className={getNavLinkClass("/about")}>About</Link>
          <Link to="/naapaithyam" className={getNavLinkClass("/naapaithyam")}>Naapaithyam</Link>
          <Link to="/courses" className={getNavLinkClass("/courses")}>Courses</Link>
          <Link to="/books" className={getNavLinkClass("/books")}>Books</Link>
          <Link to="/blog" className={getNavLinkClass("/blog")}>Blog</Link>
          <Link to="/contact" className={getNavLinkClass("/contact")}>Let me Serve You</Link>
        </div>
        <div className="nav-toggle" onClick={toggleNav}>
          <div className={`bar ${isOpen ? "animate" : ""}`}></div>
          <div className={`bar ${isOpen ? "animate" : ""}`}></div>
          <div className={`bar ${isOpen ? "animate" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
