// import React from 'react'
import { images } from "../Images";
import Tag from "./Tag"
import { MdClose } from "react-icons/md"

const ProjectModal = ({ show, handleClose, projectImageName, title, tags, links, desc, descLong }) => {
    
  const showHideClassName = show ? "modal display-block" : "modal display-none";
//   const showHideClassName = "modal display-block";

  return (
    <div className={showHideClassName} onClick={() => {
        // close modal when outside of modal is clicked
        handleClose();
      }}>
      <section className="modal-main" onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
        {/* <button type="button" className="modal-close" onClick={handleClose}>
          Close
        </button> */}
        <MdClose className="modal-close" onClick={handleClose} />
        {/* {projectImageName !== undefined ? <img src={images[projectImageName]} alt="project-img" className="project-img" /> : <img src={images['default.jpg']} alt="project-img" className="project-img" />} */}
        <div className="project-desc-container">
            <h1 className="project-item-title">{title}</h1>
            <div className="project-tags">
                {tags.map((tag, index) => <Tag key={index} label={tag.tag} color={tag.color} />)}
            </div>
        <div className="project-desc-long">
          <p className="desc-text">{descLong}</p>
        </div>
        </div>
        <div className="project-modal-links">
          { links.map(( { name, link, active }, index ) => (active ? <a href={link} className="link-active click-me-color" key={index} >{name}</a> : <a  className="link-inactive" key={index} >{name}</a>)) }
        </div>
      </section>
    </div>
  )
}

export default ProjectModal