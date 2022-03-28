// import React from 'react'

const MainContactMe = () => {
  return (
    <div className="logo-text-normal main-content-div">
     <h1 className="content-title">Contact Me</h1>
    <div className="form-container">
      <form>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="email"
            className="form-control"
            id="name"
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="message"
            aria-describedby="emailHelp"
            placeholder=""
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control form-textarea"
            id="message"
            placeholder=""
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled>
          Submit (In Progress)
        </button>
      </form>
      </div>
    </div>
  );
}

export default MainContactMe