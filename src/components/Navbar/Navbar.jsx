// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>Online Voting System</h1>
    <ul>
      <li><Link to="/" className="home">Home</Link></li>
      <li><Link to="/new-registration" className="register">Register</Link></li>
      <li><Link to="/login" className="login">Login</Link></li>
      <li><Link to="/admin" className="admin">Admin</Link></li>
    </ul>
  </nav>
);

export default Navbar;
