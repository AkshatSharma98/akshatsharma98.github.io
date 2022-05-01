import React from 'react';
import './experience-card.css';

const ExperienceCard = ({title, subtitle, exp, desc}) => {
  return (
    <div className='experience-card'>
        <h2>{title}</h2>
        <h2>{subtitle}</h2>
        <h2>{exp}</h2>
        <h3>{desc}</h3>
    </div>
  )
}

export default ExperienceCard