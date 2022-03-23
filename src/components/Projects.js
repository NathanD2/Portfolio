// import React from 'react'
import Project from "./Project"
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import React, { useState, useEffect } from 'react';

const Projects = ({ projects }) => {

  useEffect(() => {
    // Update the document title using the browser API
    scroll.scrollToTop({
      duration: 0,
      delay: 0
    });
  });


  // var scroll    = Scroll.animateScroll;
  return (
    <div className="logo-text-normal content-title project-list-container" >
      
        <h1 className="content-title" >Projects</h1>
        <div className="projects" >
        {projects.map(({ id, projectImageName, projectTitle, tags, desc }) => (<Project key={id} projectImageName={projectImageName} title={projectTitle} tags={tags} desc={desc}/>))}
        </div > 
    </div>
  )
}

export default Projects