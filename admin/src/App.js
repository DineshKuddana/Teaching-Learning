// App.js
import React, { useState, useEffect } from "react";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct imports

import AdminLogin from "../src/components/Admin/AdminLogin"; // Ensure paths are correct
import AdminConsole from "../src/components/Admin/AdminConsole"; // Ensure paths are correct

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
      <BrowserRouter>
        <Routes>
          {/* Render AdminLogin if not authenticated */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <AdminConsole onLogout={handleLogout} />
              ) : (
                <AdminLogin onLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
