import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faLock } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    voterId: '',
    password: ''
  });
  const navigate = useNavigate();

  const { voterId, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.voterId === voterId && user.password === password);
    if (user) {
      setUser(user); // Set the user state
      navigate('/profile'); // Navigate to the profile page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="card2">
          <form className="form" onSubmit={onSubmit}>
            <p id="heading">Login</p>
            <div className="field">
              <FontAwesomeIcon icon={faIdCard} className="input-icon" />
              <input type="text" name="voterId" value={voterId} onChange={onChange} className="input-field" placeholder="Voter ID (8855-XXXX)" required />
            </div>
            <div className="field">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input type="password" name="password" value={password} onChange={onChange} className="input-field" placeholder="Password" required />
            </div>
            <div className="btn">
              <button className="button1" type="submit">Login</button>
              <button className="button2" type="button" onClick={() => navigate('/new-registration')}>Register</button>
            </div>
            <button className="button3" type="button" onClick={() => navigate('/forgot-password')}>Forgot Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
