import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminNav.css';

const AdminNav = ({ setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null); // Clear the user state
    localStorage.removeItem('user'); // Remove the user data from local storage
    navigate('/'); // Redirect to home page
  };

  return (
    <nav className="admin-nav">
      <h1 className="admin-title">Admin Panel</h1>
      <ul className="admin-nav-list">
        <li>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
