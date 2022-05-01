import React from 'react'
import './header.css'
import CTA from './CTA'
import akshatprofile from "../../assets/akshat-profile.jpeg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div className="container header__container">
        <h5>Hello</h5>
        <h1>I'm Akshat Sharma</h1>
        <h5 className="text-light-1">Software Engineer</h5>
        <CTA />
        <div className="me">
          <img src ={akshatprofile} alt ="akshat's Profile" />
        </div>
        <HeaderSocials />
    </div>
  )
}

export default Header