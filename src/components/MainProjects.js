// import React from 'react'
import Project from "./Project"

const MainProjects = ({ projects, openModal }) => {
  return (
    <div className="logo-text-normal main-projects-div main-content-div">
        <h1 className="content-title" >Projects</h1>
        <div className="projects" >
        {projects.map(({ id, projectImageName, projectTitle, tags, links, desc, descLong }) => (<Project key={id} projectImageName={projectImageName} title={projectTitle} tags={tags} links={links} desc={desc} descLong={descLong} openModal={openModal}/>))}
        </div > 
        <a href="/projects" className='center-horizon link-no-decoration'>
                    <h1 className="logo-text-bold content-title click-me-color more-projects" >{"See my other Projects"}</h1>
        </a>
    </div>
  )
}

export default MainProjects