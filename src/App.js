import React from 'react';
import './style.css';
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
    <div className="jumbotron" id="jumbotron-main">
      <h1 className="display-4 responsive-header" style={{textAlign: "center"}}>Kevin Scott Salamon</h1>
      <p className="lead" alt="family-pic" style={{textAlign: "center", textShadow: "1px 2px black", fontSize: "1.5em"}}>web developer</p>
    </div>

    <div className="container rounded" style={{backgroundColor: "white", color: "black"}}>
      <div className="row">
        <div className="col-sm-12 text-center intro-index">
          An up-and-coming Full-Stack Web Developer
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-sm-4 center-small">
          <p className="mt-5 sub-intro-index">WHO AM I?</p>
          <p className="content-text">Hi there - I'm a full-stack web developer who specializes in Javascript, and has a background in React, NodeJS, MongoDB, Bootstrap, and more.
            I've studied political science and worked for political campaigns, have experience in law offices, and even did a stint as a pool boy. Now, I'm working to develop
            streamlined, functional, and modern web applications. Please see below for my full resume, and feel free to peruse my portfolio or reach out to me for more info.
          </p>
        </div>
        <div className="col-sm-4 text-right">
          <img src={require("./assets/images/profile.jpg")} className="align-self-center mt-5 mb-1 mr-2 ml-2 rounded-pill image-large hide-small" alt={"profile"} />
        </div>
        <div className="col-sm-4 center-small" style={{paddingLeft:"5%", marginBottom:"30px"}}>
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
    <Skills/>
    <Footer />
  </>
  );
}

export default App;
