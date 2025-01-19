import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import AdminNav from './components/Navbar/AdminNav';
import Home from './components/Home/Home';
import Admin from './components/NewDashboard/Admin';
import AdminLogin from './components/Sign/AdminLogin';
import Login from './components/Sign/Login';
import NewRegistration from './components/Sign/NewRegistration';
import UserProfile from './components/User/UserProfile';
import Vote from './components/Vote/Vote';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  return (
    <Router>
      {user ? (
        user.role === 'admin' ? <AdminNav /> : <NavBar />
      ) : (
        <NavBar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={user && user.role === 'admin' ? <Admin /> : <AdminLogin setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/new-registration" element={<NewRegistration />} />
        <Route path="/profile" element={<UserProfile user={user} setUser={setUser} />} />
        <Route path="/vote" element={<Vote />} />
      </Routes>
    </Router>
  );
};

export default App;