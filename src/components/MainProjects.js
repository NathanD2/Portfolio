// import React from 'react'
import Project from "./Project"

const MainProjects = ({ projects, openModal }) => {
  return (
    <div className="logo-text-normal main-projects-div main-content-div">
        <h1 className="content-title" >Projects</h1>
        <div className="projects" >
        {projects.map(({ id, projectImageName, projectTitle, tags, desc }) => (<Project key={id} projectImageName={projectImageName} title={projectTitle} tags={tags} desc={desc} openModal={openModal}/>))}
        </div > 
        <a href="/projects" className='center-horizon link-no-decoration'>
                    <h1 className="logo-text-bold content-title click-me-color more-projects" >{"See my other Projects"}</h1>
        </a>
    </div>
  )
}

export default MainProjects