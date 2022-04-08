// import React from 'react'

import { useState } from "react";

const MainContactMe = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [contactMeRequestStatus, setContactMeRequestStatus] = useState('');

  
  const sendMail = (reqBody) => {
  
    // AJAX Request
    const xhttp = new XMLHttpRequest();

    // Different Local host Ajax request.
    // xhttp.open("POST", "http://localhost:8080/send", true);
    xhttp.open("POST", "/send", true);

    xhttp.setRequestHeader("Content-type", "application/json");
    // xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    let obj = reqBody;
    xhttp.send(JSON.stringify(obj));

    xhttp.onreadystatechange = function () {
        // If request finished and status OK
        if (this.readyState === 4 && (this.status === 200 || this.status === 201)) {
          setContactMeRequestStatus("Request was a success!");
        } else if (this.status !== 200) {
          setContactMeRequestStatus("Request was a failure!");
        } else {
          setContactMeRequestStatus("Request in progress.");
        }
    }

  };
  //1.
  const onSubmit = ((event) => {
    event.preventDefault();


    if(!message) {
      alert('Please add a Message')
      return
    }
    if(!name) {
      alert('Please add a Name')
      return
    }

    sendMail({ name:name, email: email, message: message });

    setName('')
    setEmail('')
    setMessage('')

    
  })
  return (
    <div className="logo-text-normal main-content-div">
     <h1 className="content-title">Contact Me</h1>
    <div className="form-container">
      <form method="POST" onSubmit={onSubmit} action="send" encType="multipart/form-data">
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            className="form-control"
            id="name"
            placeholder=""
            value={name} onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="message"
            aria-describedby="emailHelp"
            placeholder=""
            value={email} onChange={(e) => setEmail(e.target.value)}
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
            name="message"
            placeholder=""
            value={message} onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      <p className="contactme-status">{ contactMeRequestStatus }</p>
      </form>
      </div>
    </div>
  );
}

export default MainContactMe