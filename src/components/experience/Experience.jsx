import React from 'react'
import './experience.css'
import ExperienceCard from './ExperienceCard'

const Experience = () => {
  const data = [
    {
      title: "Zomato",
      subtitle: "Full time - iOS Engineer",
      exp: "1.8 years/20 months",
      desc: "Worked on Payments and Search Teams. Developed Flows for UPI Card, Visa Single Click and 2022 App's home screen."
    },
    {
      title: "Indian Council Of Medical Research",
      subtitle: "Internship - Full Stack Developer",
      exp: "2 months",
      desc: "Worked on databases(MySQL), Javascript(React, Jquery, Axios) to build an application to query over DNA database and showing results."
    }
  ]

  return (

    <div className='container experience'>
       <h1>Experience</h1>
       <div className="experience_cards">
         <ExperienceCard title={data[0].title}
                      subtitle={data[0].subtitle}
                      exp = {data[0].exp}
                      desc = {data[0].desc}/>
         <ExperienceCard title={data[1].title}
                      subtitle={data[1].subtitle}
                      exp = {data[1].exp}
                      desc = {data[1].desc}/>                 
      </div>
    </div>
  )
}

export default Experience