import React, {useEffect} from 'react'
import "./about.css"
import AboutCard from './AboutCard'

const About = () => {
  const data = [
    {
      title: "Bachelor of Technology(BTech)",
      duration: "2016-2020",
      subtitle: "DTU",
      moreInfo: "8.55 CGPA",
      desc: "Studied Engineering Physics with majors in Electronics and minors in Robotics from Delhi Technological University(DTU)."
    },
    {
      title: "Senior Secondary School",
      duration: "2014-2016",
      subtitle: "CBSE",
      moreInfo: "95.2%",
      desc: "Studied Science with Computer Science."
    }
  ]
  return (
    <div className="container about">
      <h1>Education</h1>
      <div className='about-card__parent'>
        <AboutCard title= {data[0].title}
                   subtitle= {data[0].subtitle}
                   moreInfo= {data[0].moreInfo}
                   duration = {data[0].duration}
                   desc= {data[0].desc}/>

        <AboutCard title= {data[1].title}
                   subtitle= {data[1].subtitle}
                   moreInfo= {data[1].moreInfo}
                   duration = {data[1].duration}
                   desc= {data[1].desc}/>
      </div>
    </div>
  )
}

export default About