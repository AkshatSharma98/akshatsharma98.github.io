import React from 'react'

const AboutCard = ({title, subtitle, moreInfo, desc, duration}) => {
  return (
    <div className='about-card'>
      <div className="about-card__top">  
        <h4>{title}</h4>
        <h4>{subtitle}</h4>
        <h4>{moreInfo}</h4>
        <h4>{duration}</h4>
      </div>
      <h2>{desc}</h2>
    </div>
  )
}

export default AboutCard