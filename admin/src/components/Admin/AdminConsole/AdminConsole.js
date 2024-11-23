import React, { useState, useEffect } from "react";
import "./AdminConsole.css";
import TableDisplay from '../TableDisplay/TableDisplay';
import BlogComments from '../BlogComments/BlogComments';
import Quotes from '../../Quotes/Quotes';


const AdminConsole = ({ onLogout }) => {
  const [activeComponent, setActiveComponent] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  useEffect(() => {
    const storedComponent = localStorage.getItem("activeComponent");
    if (storedComponent) {
      setActiveComponent(storedComponent);
    }
  }, []);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    localStorage.setItem("activeComponent", component);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Perform the logout action here, such as clearing localStorage and redirecting
    localStorage.removeItem("activeComponent");
    localStorage.removeItem("authToken"); // Example: Remove token for logout
    if (onLogout) onLogout(); // Trigger the parent logout handler if passed
    console.log("Logged out!");
    window.location.href = "/"; // Redirect to the login or home page
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <h2>Dashboard Page</h2>;
      case "showUsers":
        return <TableDisplay/>
      case "blogComments":
        return <BlogComments/>
      case "booksOrder":
        return <h2>Data will update soon...</h2>;
      
      case "quotes":
        return <Quotes/>
      default:
        return <h1>Welcome to Admin Console</h1>;
    }
  };

  return (
    <div className="new-admin-panel">
      <header className="new-admin-header">
        <div className="header-left">
          <button className="menu-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <h1 className="header-logo">Admin Console</h1>
        </div>
        <div className="header-right">
          <div className="admin-profile">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDAW3c4VeojGKTpXQCtoLQG0_VWjzJwVdAEQ&s"
              alt="Admin"
              className="profile-pic"
              onClick={toggleDropdown} // Toggle dropdown on click
            />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="new-admin-layout">
        <aside className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
          <ul>
            <li
              className={activeComponent === "dashboard" ? "active" : ""}
              onClick={() => handleComponentChange("dashboard")}
            >
              Dashboard
            </li>
            <li
              className={activeComponent === "showUsers" ? "active" : ""}
              onClick={() => handleComponentChange("showUsers")}
            >
              Suggestions
            </li>
            <li
              className={activeComponent === "blogComments" ? "active" : ""}
              onClick={() => handleComponentChange("blogComments")}
            >
              Blog Comments
            </li>
            <li
              className={activeComponent === "booksOrder" ? "active" : ""}
              onClick={() => handleComponentChange("booksOrder")}
            >
              Books Order
            </li>


            <li
              className={activeComponent === "quotes" ? "active" : ""}
              onClick={() => handleComponentChange("quotes")}
            >
              Quotes Update
            </li>
            <li
              className="logout-sidebar"
              onClick={handleLogout} // Sidebar logout
            >
              Logout
            </li>
          </ul>
        </aside>
        <main className="admin-content">{renderComponent()}</main>
      </div>
    </div>
  );
};

export default AdminConsole;
