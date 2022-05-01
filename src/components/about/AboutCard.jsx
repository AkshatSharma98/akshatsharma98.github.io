import React from 'react'

const AboutCard = ({title, subtitle, moreInfo}) => {
  return (
    <div className="about-card">  
        <h4>{title}</h4>
        <h4>{subtitle}</h4>
        <h4>{moreInfo}</h4>
    </div>
  )
}

export default AboutCard