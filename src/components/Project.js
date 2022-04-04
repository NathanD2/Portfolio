// import { useState} from 'react'

import Tag from "./Tag"
import { images } from "../Images";

const Project = ({ projectImageName, title, tags, links, desc, descLong, openModal }) => {


  return (
    <div className="project-container" onClick={() => {
      openModal(projectImageName, title, tags, links, desc, descLong) }}>

    {projectImageName !== undefined ? <img src={images[projectImageName]} alt="project-img" className="project-img" /> : <img src={images['default.jpg']} alt="project-img" className="project-img" />}
        <div className="project-desc-container">
            <h1 className="project-item-title">{title}</h1>
            <div className="project-tags">
                {tags.map((tag, index) => <Tag key={index} label={tag.tag} color={tag.color} />)}
            </div>
        <p className="desc-text project-desc">{desc}</p>
        <div className="project-links">
          { links.map(( { name, link, active }, index ) => (active ? <a href={link} className="link-active" key={index} >{name}</a> : <a  className="link-inactive" key={index} >{name}</a>)) }
        </div>
        </div>
    </div>
  )
}

export default Project