// AdminConsole.js
import React, { useState, useEffect } from 'react';
import TableDisplay from './TableDisplay'; 
import './Admin.css';
import Header from './Headerr';
import BlogComments from './BlogComments/BlogComments';

const AdminConsole = ({ onLogout }) => {
  const [activeComponent, setActiveComponent] = useState('');

  useEffect(() => {

    const storedComponent = localStorage.getItem('activeComponent');
    if (storedComponent) {
      setActiveComponent(storedComponent);
    }
  }, []);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
   
    localStorage.setItem('activeComponent', component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <h2>Dashboard Page</h2>
      case 'showUsers':
        return <TableDisplay />;
      case 'blogComments':
        return <BlogComments/>;
      case 'booksOrder':
        return <h2>Data will update soon...</h2>
      default:
        return <h1>Welcome to Admin Console</h1>
    }
  };

  return (
    <>
      <Header />
      <div className="admin-layout">
        <div className="sidebar">
          <ul>
            <li onClick={() => handleComponentChange('dashboard')}>Dashboard</li>
            <li onClick={() => handleComponentChange('showUsers')}>Suggestions</li>
            <li onClick={() => handleComponentChange('blogComments')}>Blog Comments</li>
            <li onClick={() => handleComponentChange('booksOrder')}>Books Order</li>
            <li onClick={onLogout}>LogOut</li>

          </ul>
          
        </div>

        <div className="admin-content">
          {renderComponent()} 
        </div>
      </div>
    </>
  );
};

export default AdminConsole;
