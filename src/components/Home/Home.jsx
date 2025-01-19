// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import image1 from '../../Images/Dr.Shafiqur Rahman.jpg';
import image2 from '../../Images/Symbol3.jpg';
import image3 from '../../Images/Sheikh Hasina.jpg';
import image4 from '../../Images/Symbol1.jpg';
import image5 from '../../Images/Jatiyo Party.jpg';
import image6 from '../../Images/Symbol4.jpg';
import image7 from '../../Images/Tarek Rahman.jpg';
import image8 from '../../Images/Symbol2.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="welcome-text">
              <h1 className="">Welcome to the Online Voting System</h1>
                <p>Your voice matters and voting has never been easier.</p>
                <p>Secure, fast, and transparent – cast your vote from anywhere, anytime.</p>
                <p>Ensure your participation in shaping the future of our community.</p>
                <p>Start voting now and make your opinion count.</p>
            </div>
            <div className="gallery">
                <img src={image1} alt="Dr. Shafiqur Rahman" />
                <img src={image2} alt="Symbol3" />
                <img src={image3} alt="Sheikh Hasina" />
                <img src={image4} alt="Symbol1" />
                <img src={image5} alt="Jatiyo Party" />
                <img src={image6} alt="Symbol4" />
                <img src={image7} alt="Tarek Rahman" />
                <img src={image8} alt="Symbol2" />
            </div>
        </div>
    );
};

export default Home;
