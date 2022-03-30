// import React from 'react'
// import { Link } from "react-router-dom"
// import { Link, animateScroll as scroll } from "react-scroll";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import pdf from '../assets/Nathan_Dong_Resume.pdf'


const Header = () => {
  return (
    <div className="header-container">
    <header className='header'>
      <a href="/" className="logo-main">
        <h1 className="logo-text-bold" >{"Nathan"}</h1>
        <h1 className="logo-text-normal">{"Dong"}</h1>
      </a>
        <ul className="links-list">
          <li>
            <a href="/" className="header-link">
              <h3>Home</h3>
            </a>
          </li>
          <li>
            <a href="/projects" className="header-link">
              <h3>Projects</h3>
            </a>
          </li>
          <li>
            <a href="/about" className="header-link">
              <h3 >About</h3>
            </a>
          </li>
          <li>
            <a href={pdf} className="header-link">
              <h3>Resume</h3>
            </a>
          </li>
        </ul>
        <span></span>
    </header>
    </div>
  )
}

export default Header