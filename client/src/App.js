// App.js
import React, { useState, useEffect } from "react";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';

import About from "./sections/About/About";
import Books from './sections/Books/Books';
import NaPaithyam from './sections/NaPaithyam/NaPaithyam';
import Blog from './sections/Blog/BlogGrid';
import BlogDetail from "./sections/Blog/BlogDetail";

import Courses from "./sections/Courses/Courses";
import AdminLogin from "../src/components/Admin/AdminLogin";
import AdminConsole from "../src/components/Admin/AdminConsole";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user is already authenticated
    const savedAuthState = localStorage.getItem('isAuthenticated');
    if (savedAuthState === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    const correctUsername = 'admin';
    const correctPassword = 'password123'; 

    if (username === correctUsername && password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true'); 
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); 
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/naapaithyam" element={<NaPaithyam />} />
          
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route
            path="/admin/*"
            element={
              isAuthenticated ? (
                <AdminConsole onLogout={handleLogout} />
              ) : (
                <AdminLogin onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
