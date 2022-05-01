import React, {useEffect} from 'react'
import "./about.css"
import AboutCard from './AboutCard'

const About = () => {
  const data = [
    {
      title: "Bachelor of Technology",
      subtitle: "DTU",
      moreInfo: "8 CGPA"
    }
  ]
  return (
    <>
    <h1>Education</h1>

    <div className="about container">
      <AboutCard title= {data[0].title}
       subtitle= {data[0].subtitle}
       moreInfo= {data[0].moreInfo}/>
    </div>
    </>
  )
}

export default About