import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBirthdayCake, faPhone, faIdCard, faLock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './NewRegistration.css';

const NewRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    dob: '',
    phone: '',
    voterId: '',
    password: '',
    confirmPassword: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [voterIdError, setVoterIdError] = useState('');
  const navigate = useNavigate();

  const { firstName, lastName, age, dob, phone, voterId, password, confirmPassword } = formData;

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob.split('-').reverse().join('-'));
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const onChange = (e) => {
    if (e.target.name === 'dob') {
      const age = calculateAge(e.target.value);
      setFormData({ ...formData, [e.target.name]: e.target.value, age });
    } else if (e.target.name === 'voterId') {
      const value = e.target.value;
      if (!/^8855-\d{4}$/.test(value)) {
        setVoterIdError('Voter ID must be in the format 8855-XXXX');
      } else {
        setVoterIdError('');
      }
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const isVoterIdUnique = (voterId) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return !users.some((user) => user.voterId === voterId);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (age < 18) {
      setErrorMessage('You are not applicable for participating vote.');
      return;
    }
    if (!isVoterIdUnique(voterId)) {
      setErrorMessage('Voter ID must be unique.');
      return;
    }
    if (voterIdError) {
      setErrorMessage('Invalid Voter ID.');
      return;
    }
    // Save user data to local storage (for simplicity)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div className="registration-container">
      <h2>Voter Registration Form</h2>
      <form onSubmit={onSubmit}>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" name="firstName" value={firstName} onChange={onChange} placeholder="First Name" required />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" name="lastName" value={lastName} onChange={onChange} placeholder="Last Name" required />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faCalendarAlt} />
          <input type="text" name="dob" value={dob} onChange={onChange} placeholder="Date of Birth (dd-mm-yyyy)" required />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faBirthdayCake} />
          <input type="number" name="age" value={age} onChange={onChange} placeholder="Age" readOnly required />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faPhone} />
          <input type="text" name="phone" value={phone} onChange={onChange} placeholder="Phone Number" required />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faIdCard} />
          <input type="text" name="voterId" value={voterId} onChange={onChange} placeholder="Voter ID" required />
        </div>
        {voterIdError && <p className="error-message">{voterIdError}</p>}
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} />
          <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        </div>
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} />
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} placeholder="Confirm Password" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default NewRegistration;
