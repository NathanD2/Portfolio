// import React from 'react'
import Project from "./Project"
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import React, { useState, useEffect } from 'react';


import { ProjectData } from '../ProjectData'

const Projects = ( { openModal } ) => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    scroll.scrollToTop({
      duration: 0,
      delay: 0
    });

    setProjects(ProjectData);
  });


  // var scroll    = Scroll.animateScroll;
  return (
    <div className="logo-text-normal content-title  page-container" >
      
        <h1 className="content-title" >Projects</h1>
        <div className="projects" >
        {projects.map(({ id, projectImageName, projectTitle, tags, links, desc, descLong }) => (<Project key={id} projectImageName={projectImageName} title={projectTitle} tags={tags} links={links} desc={desc} descLong={descLong} openModal={openModal}/>))}
        </div > 
    </div>
  )
}

export default Projects