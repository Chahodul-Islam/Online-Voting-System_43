import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import WelcomeMessage from './WelcomeMessage'; // Import the WelcomeMessage component

const UserProfile = ({ user, setUser }) => {
  const [profilePicture, setProfilePicture] = useState(user?.photo || '');

  useEffect(() => {
    if (!user?.votingStatus) {
      const updatedUser = { ...user, votingStatus: "Not Voted" };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  }, [user, setUser]);

  const onImageChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePicture(reader.result);
      const updatedUser = { ...user, photo: reader.result };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    };
    reader.readAsDataURL(file);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="left-section">
        <div className="profile-content">
          <div className="profile-picture">
            <img src={profilePicture} alt="User" className="user-photo" />
            <input type="file" accept="image/*" onChange={onImageChange} />
          </div>
          <div className="user-profile">
            <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Date of Birth:</strong> {user.dob}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Voter ID:</strong> {user.voterId}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Voting Status:</strong> {user.votingStatus}</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <WelcomeMessage userName={user.firstName} />
        <button className="participate-vote-button">Participate in Vote</button>
      </div>
    </div>
  );
};

export default UserProfile;
