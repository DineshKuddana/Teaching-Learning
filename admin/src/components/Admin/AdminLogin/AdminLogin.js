import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="admin-login-container">
      {/* Header */}
      <header className="admin-header">
        <h1>Admin Panel</h1>
      </header>

      {/* Login Form */}
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p>Please login to continue</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="admin-footer">
        <p>© 2024 Admin Portal. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AdminLogin;
