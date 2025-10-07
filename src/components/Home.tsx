import React from 'react';
import './Home.css';
import profileImage from '../assets/home.jpg';  

const Home: React.FC = () => {
  return (
    <div id="home" className="home-container">
      <div className="main-content-wrapper">  
        <div className="left-section">  
          <p className="welcome-text">Welcome,</p>
          <h1 className="name-heading">I am <span className="highlight-name-home">Orlyn R.</span></h1>
          <p className="description-text">3rd Year It Students</p>
        </div>
        <div className="right-section">  
          <div className="image-wrapper">
            <img
              src={profileImage}
              alt="orlyn"
              className="profile-image"
            />
          </div>
          <a href="#about" className="learn-more-button">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
