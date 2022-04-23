import { Link } from 'react-scroll'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import pdf from '../assets/Nathan_Dong_Resume.pdf'


const Header = () => {

  const location = useLocation().pathname;
  
  const [path] = useState(location);

  return (
    <div className="header-container">
    <header className='header'>
      <a href="/" className="logo-main">
        <h1 className="logo-text-bold" >{"Nathan"}</h1>
        <h1 className="logo-text-normal">{"Dong"}</h1>
      </a>
        <ul className="links-list">
          <li>
            {
              path === '/' ?
              <Link to="home" className="header-link" spy={true} smooth={true} duration={500}>
                <h3>Home</h3>
              </Link> :
              <a href="/" className="header-link">
                <h3>Home</h3>
              </a>
            }
            
          </li>
          <li>
            {
              path === '/' ?
              <Link to="projects" className="header-link" spy={true} smooth={true} duration={500}>
                <h3>Projects</h3>
              </Link> :
              <a href="/#projects" className="header-link">
              <h3>Projects</h3>
            </a>
            }
            
          </li>
          <li>
          {
              path === '/' ?
              <Link to="about" className="header-link" spy={true} smooth={true} duration={500}>
                <h3 >About</h3>
              </Link> :
              <a href="/#about" className="header-link">
              <h3 >About</h3>
            </a>
          }
            
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