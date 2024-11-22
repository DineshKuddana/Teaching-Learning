import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="admin-header">
      <div className="header-left">
        <h1 className="header-logo">Admin Console</h1>
      </div>
      <div className="header-right">
        <nav className="header-nav">
          
        </nav>
        <div className="admin-profile">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAW3c4VeojGKTpXQCtoLQG0_VWjzJwVdAEQ&s" 
            alt="Admin" 
            className="profile-pic" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
