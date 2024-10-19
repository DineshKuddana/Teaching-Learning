// App.js
import React from "react";
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



function App() {
 

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
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
