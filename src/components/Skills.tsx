import React from 'react';
import './Skills.css';
 
import volleyball from '../assets/volleyball.png';
import singing from '../assets/singing.png';
import cooking from '../assets/cooking.png';
import watching from '../assets/watching.png';
import swimming from '../assets/swimming.png';
import badminton from '../assets/badminton.png';

interface SkillItemProps {
  name: string;
  icon: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => (
  <div className="skill-card">  
    <img src={icon} alt={`${name} icon`} className="skill-card-icon" />  
    <span className="skill-card-name">{name}</span> 
  </div>
);

const Skills: React.FC = () => {
  const skillsData = [
    { name: 'Volleyball', icon: volleyball },
    { name: 'Badminton', icon: badminton },
    { name: 'Cooking', icon: cooking },
    { name: 'Swimming', icon: swimming },
    { name: 'Singing', icon: singing },
    { name: 'Watching', icon: watching },
  ];

  return (
    <section id="skills" className="skills-section">  
      <h2 className="skills-title">
         My Skills / Hobbies
      </h2>
      <div className="skills-title-underline"></div>  

      <div className="skills-grid-container">  
        {skillsData.map((skill, index) => (
          <SkillItem key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;