// import { useState} from 'react'

import Tag from "./Tag"
import { images } from "../Images";

const Project = ({ projectImageName, title, tags, desc, openModal }) => {


  return (
    <div className="project-container" onClick={() => {
      openModal(0) }}>

    {projectImageName !== undefined ? <img src={images[projectImageName]} alt="project-img" className="project-img" /> : <img src={images['default.jpg']} alt="project-img" className="project-img" />}
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