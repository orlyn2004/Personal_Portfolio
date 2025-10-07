import React from 'react';
import './About.css';
import orImage from '../assets/about.jpg'; 


const peopleData = [
  {
    name: "Orlyn Montilla Rocero",
    image: orImage,
    age: "21 Years Old",
    year: "3rd Year",
    location: "Brgy. 3",
    greeting: "Hi, I am",
    tagline: "An Information Technology Student",
    description: "I was born on June 15, 2004, in Romblon, Romblon. At present, I live in Barangay 3. I am currently a third-year student at Romblon State University, Romblon Campus, where I am pursuing a Bachelor of Science in Information Technology.",
  },
  ];

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-underline"></div>

      <div className="people-container">
        {peopleData.map((person, index) => (
          <div key={index} className="person-card">
            <div className="about-left-column">
              <div className="about-image-card">
                <div className="about-image-border">
                  <img src={person.image} alt={person.name} className="about-profile-image" />
                </div>
              </div>
              <div className="about-details-card">
                <p>{person.age}</p>
                <p>{person.year}</p>
                <p>{person.location}</p>
              </div>
            </div>

            <div className="about-right-column">
              <div className="about-info-card">
                <p className="about-greeting">{person.greeting}</p>
                <h3 className="about-name">{person.name}</h3>
                <p className="about-tagline">{person.tagline}</p>
                <p className="about-description">{person.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;