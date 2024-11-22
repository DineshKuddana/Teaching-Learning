import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">
          Teaching Learning
          <sub>
            <p className="by">by</p>
            <h5 className="sub-title">Pakanati Chenna Reddy</h5>
          </sub>
        </h1>
        <h3 className="header-tagline">
          Urgency: The world is driven by economics, and poor and middle-class families should have financial literacy.
        </h3>
      </div>
    </header>
  );
};

export default Header;
