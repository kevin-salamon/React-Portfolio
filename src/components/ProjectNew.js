import React from 'react';
import '../style.css';

function ProjectNew(props) {

    return (
        <div className="project-flex-container" style={{background: `linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
          ), url(${props.background})`}}>
            <h1 className="project-header">{props.name}</h1>
            <p className="project-text">{props.desc}</p>
            <a href={props.github} target="#" style={{color: "white"}} className="project-link">Github</a>
            <a href={props.deployed} target="#" style={{color: "white"}} className="project-link">Deployed Site</a>
        </div>
    );
};
  
export default ProjectNew;
  