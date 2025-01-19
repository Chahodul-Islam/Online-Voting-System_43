import React from 'react';
import AdminNav from '../Navbar/AdminNav';
import '../Navbar/AdminNav.css';  // Correct import path
import './Admin.css';  // Importing the new CSS for Admin

const Admin = () => {
  const manageVoterInformation = () => {
    // Logic to manage voter information
  };

  const handleElectionSetup = () => {
    // Logic to handle election setup
  };

  const manageCandidates = () => {
    // Logic to manage candidates
  };

  const viewResults = () => {
    // Logic to view election results
  };

  return (
    <div className="admin-container">
      <AdminNav />
      <div className="admin-dashboard">
        <div className="sidebar">
          <ul>
            <li className="active">Dashboard</li>
            <li onClick={manageVoterInformation}>Manage Voter Information</li>
            <li onClick={handleElectionSetup}>Handle Election Setup</li>
            <li onClick={manageCandidates}>Manage Candidates</li>
            <li onClick={viewResults}>View Results</li>
          </ul>
        </div>
        <div className="main-content">
          <h1>Admin Dashboard</h1>
          <p>Welcome to the admin dashboard. Use the sidebar to navigate through the different sections.</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
