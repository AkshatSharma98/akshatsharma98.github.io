import React, {useState} from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai';
import {MdContactPhone} from 'react-icons/md';

const Nav = () => {
  const [active, setActive] = useState("#");
  const onClick = (tag) => {
    setActive(tag);
  };
  return (
    <div className="nav">
      <div className="nav__link">
         <a onClick={() => onClick("#")}
          className = {active === "#" ? "active" : ''}
          href="#">
            <AiTwotoneHome />
         </a> 
         <a onClick={() => onClick("#contact")}
          className = {active === "#contact" ? "active" : ''}
          href="#contact">
            <MdContactPhone />
         </a> 
      </div>
    </div>
  )
}

export default Nav