// import React from 'react'

const MainContactMe = () => {
  return (
    <div className="logo-text-normal main-content-div">
     <h1 className="content-title">Contact Me</h1>
    <div className="form-container">
      <form>
      <div class="form-group">
          <label for="name">Name</label>
          <input
            type="email"
            class="form-control"
            id="name"
            placeholder=""
          />
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="message"
            aria-describedby="emailHelp"
            placeholder=""
          />
          {/* <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            class="form-control form-textarea"
            id="message"
            placeholder=""
          />
        </div>

        <button type="submit" class="btn btn-primary" disabled>
          Submit (In Progress)
        </button>
      </form>
      </div>
    </div>
  );
}

export default MainContactMe