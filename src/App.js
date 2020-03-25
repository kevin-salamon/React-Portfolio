import React from 'react';
import './style.css';

// future steps:
// 4. create working portfolio component which will need to use hooks etc. to render a new project each time (x6)
// 5. make portfolio page
// 6. Add Footer component

function App() {
  return (
    <>
    <div className="jumbotron" id="jumbotron-main">
      <h1 className="display-4" style={{textAlign: "center", paddingTop:"10%"}}>Kevin Scott Salamon</h1>
      <p className="lead" alt="family-pic" style={{textAlign: "center"}}>welcome to my portfolio</p>
    </div>

    <div className="container">
    <div className="row">
      <div className="col-sm-12 text-center intro-index">
        An up-and-coming Full-Stack Wev Developer
      </div>
    </div>
    <div className="row mb-5">
      <div className="col-sm-4">
        <p className="mt-5 sub-intro-index">WHO ARE YOU?</p>
        <p className="content-text">Hi there - I'm a full-stack web developer who specializes in Javascript, and has a background in React, NodeJS, MongoDB, Bootstrap, and more.
          I've studied political science and worked for political campaigns, have experience in law offices, and even did a stint as a pool boy. Now, I'm working to develop
          streamlined, functional, and modern-looking web applications. Please see below for my full resume, and feel free to peruse my portfolio of works or reach out to me for more info.
        </p>
      </div>
      <div className="col-sm-4 text-right">
        <img src={require("./assets/images/profile.jpg")} className="align-self-center mt-5 mb-1 mr-2 ml-2 rounded-pill image-large hide-small" alt={"profile"} />
      </div>
      <div className="col-sm-4" style={{paddingLeft:"5%", marginBottom:"30px"}}>
        <p className="mt-5 sub-intro-index">MY INFO</p>
        <p className="sub-sub-intro-index">Name</p>
        <p className="content-text">Kevin Salamon</p>
        <p className="sub-sub-intro-index">Location</p>
        <p className="content-text">Long Valley, NJ, USA</p>
        <p className="sub-sub-intro-index">How can I best reach you?</p>
        <p className="content-text">Reach out to me by e-mail at <u>theksalamon@gmail.com</u></p>
      </div>
    </div>
  </div> 
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 footer-main text-center" style={{marginTop:"8%"}}>
          Contact Me
        </div>
      </div>
      <div className="row footer-sub">
        <div className="col-sm-6">
          <a href="https://www.linkedin.com/in/kevin-salamon-8353a5b5/" target="#"><p className="footer-content m-5">LinkedIn</p></a>
          <a href="https://github.com/kevin-salamon" target="#"><p className="footer-content m-5">GitHub</p></a>
        </div>
        <div class="col-sm-6">
          <p className="footer-content m-5">1-908-310-2027</p>
          <p className="footer-content m-5"><u>theksalamon@gmail.com</u></p>
        </div>
      </div>
    </div>
  </footer> 
    </>
  );
}

export default App;
