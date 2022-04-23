// import React from 'react'

import { Link } from "react-scroll";

const MainAbout = () => {
  return (
    <div className="logo-text-normal main-content-div">
      <div className="about-text-container">
        <div className="about-text-div bg-blue">
          <h1 className="content-title">About Me</h1>
          <h1 className="about-text">
            Hey! I'm Nathan Dong and thanks for taking the time to visit my web
            portfolio. I'm an aspiring Software Developer eager to gain
            experience and make things that have an impact of the realworld! If
            you would like to contact me, you can reach me through{" "}
            <a
              href="https://www.linkedin.com/in/nathandong-dev/"
              className="contact-link"
            >
              LinkedIn
            </a>
            , by email @{" "}
            <a href="mailto:nate.dong97@gmail.com" className="contact-link">
              nate.dong97@gmail.com
            </a>{" "}
            and by the{" "}
            <Link
              to="contact"
              className="contact-link"
              spy={true}
              smooth={true}
              duration={500}
            >
              contact form
            </Link>{" "}
            below. You can find more of my work on my{" "}
            <a href="https://github.com/NathanD2" className="contact-link">
              Github
            </a>
            .
          </h1>

          <h1 className="about-text">
            Technologies I Love: Python, React, Express, NodeJS
          </h1>
          <h1 className="about-text">
            Technologies I'm Learning: C++, Django, Unreal Engine
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
