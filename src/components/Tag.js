// import React from 'react'


const Tag = ({ label, color }) => {
  return (
    <div className="tag-div" 
    style={
        {
            backgroundColor: color
        }
    }
    >
        <p className="tag-label">{ label }</p>    
    </div>
  )
}

Tag.defaultProps = {
    label: "Placeholder",
    color: "lightblue"
}

export default Tag