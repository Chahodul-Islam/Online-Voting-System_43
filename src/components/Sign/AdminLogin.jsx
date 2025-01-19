import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faLock } from '@fortawesome/free-solid-svg-icons';
import './AdminLogin.css';

const AdminLogin = ({ setUser }) => {
  const [formData, setFormData] = useState({
    adminId: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Set initial admin credentials if not already present
    const admin = JSON.parse(localStorage.getItem('admin'));
    if (!admin) {
      const initialAdmin = {
        adminId: 'Admin',
        password: 'Password'
      };
      localStorage.setItem('admin', JSON.stringify(initialAdmin));
    }
  }, []);

  const { adminId, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (adminId === '' || password === '') {
      setErrorMessage('All fields are required.');
      return;
    }
    const admin = JSON.parse(localStorage.getItem('admin'));
    if (admin && admin.adminId === adminId && admin.password === password) {
      setUser({ ...admin, role: 'admin' });
      navigate('/admin');
    } else {
      setErrorMessage('Invalid credentials.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="card">
        <div className="card2">
          <form className="form" onSubmit={onSubmit}>
            <p id="heading">Admin Login</p>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="field">
              <FontAwesomeIcon icon={faIdCard} className="input-icon" />
              <input type="text" name="adminId" value={adminId} onChange={onChange} className="input-field" placeholder="Admin ID" required />
            </div>
            <div className="field">
              <FontAwesomeIcon icon={faLock} className="input-icon" />
              <input type="password" name="password" value={password} onChange={onChange} className="input-field" placeholder="Password" required />
            </div>
            <div className="btn">
              <button className="button1" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
