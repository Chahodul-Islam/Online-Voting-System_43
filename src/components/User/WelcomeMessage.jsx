import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomeMessage.css';

const WelcomeMessage = ({ userName }) => {
  const navigate = useNavigate();

  return (
    <div className="welcome-message">
      <h1>Welcome {userName}</h1>
      <h2>Welcome to Online Voting Platform</h2>
      <h3>Exercise Your Right to Vote Anytime, Anywhere</h3>
      <button className="" onClick={() => navigate('/vote')}>Participate in Vote</button>
    </div>
  );
};

export default WelcomeMessage;
