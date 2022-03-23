// import React from 'react'
import Tag from "./Tag"

const Project = ({ projectImageName, title, tags, desc }) => {
    console.log("../assets/" + projectImageName)
  return (
    <div className="project-container">
    <img src={projectImageName} alt="project-img" className="project-img" />
        <div className="project-desc-container">
            <h1 className="project-item-title">{title}</h1>
            <div className="project-tags">
                {tags.map((tag, index) => <Tag key={index} label={tag.tag} color={tag.color} />)}
            </div>
        <p className="desc-text">{desc}</p>
        </div>
    </div>
  )
}

export default Project