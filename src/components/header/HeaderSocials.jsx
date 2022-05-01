import React from 'react';
import "./headersocials.css";
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a><BsGithub /></a>
        <a><BsInstagram /></a>
        <a><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocials