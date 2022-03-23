// import React from 'react'
import Project from "./Project"

const ProjectHighlights = ({ projects }) => {
  return (
    <div className="logo-text-normal">
        <h1 className="content-title" >Projects</h1>
        <div className="projects" >
        {projects.map(({ id, projectImageName, projectTitle, tags, desc }) => (<Project key={id} projectImageName={projectImageName} title={projectTitle} tags={tags} desc={desc}/>))}
        </div > 
    </div>
  )
}

export default ProjectHighlights