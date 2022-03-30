// import React from 'react'

const ProjectModal = ({ show, handleClose }) => {
    
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
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  )
}

export default ProjectModal