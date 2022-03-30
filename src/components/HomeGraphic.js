// import React from 'react'
import { TiLocation } from 'react-icons/ti'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'


import { Link } from "react-scroll";

import mainGraphic from '../assets/content-bg.jpg';
// import mainGraphic from '../assets/van-light.jpg';


const HomeGraphic = () => {
  return (
    <div className="main-graphic-img " id="home">
        <div className="main-graphic-text-container">
          <div className="main-graphic-text-item-container">
            <TiLocation className='info-icon' />
            <a>
              <h1 className='info-text'>British Columbia, Vancouver</h1>
            </a>
          </div>
          <div className="main-graphic-text-item-container hover">
            <FaGithub className='info-icon' />
            <a href="https://github.com/NathanD2">
              <h1 className='info-text'>Github</h1>
            </a>
          </div>
          <div className="main-graphic-text-item-container hover">
            <FaLinkedin className='info-icon' />
            <a href="https://www.linkedin.com/in/nathandong-dev/">
              <h1 className='info-text'>Linkedin</h1>
            </a>
          </div>
          <div className="main-graphic-text-item-container hover">
            <HiOutlineMail className='info-icon' />
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <h1 className='info-text'>Email</h1>
            </Link>
           
          </div>
        </div>
        
      <img src={mainGraphic} className="main-graphic-img "/>
    </div>
  )
}

export default HomeGraphic