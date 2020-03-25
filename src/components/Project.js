import React from 'react';
import '../style.css';

function Project(props) {

    return (
    <div className="row jumbotron-portfolio rounded pt-3">
        <div className="col-sm-6">
            <img src={(props.imgSource)} alt={props.alt} className="split-image"/>
        </div>
        <div className="col-sm-6" style={{textAlign: "center"}}>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
            <p>___________</p>
            <a href={props.github} target="#">Github</a>
            <p>___________</p>
            <a href={props.deployed} target="#">Deployed Site</a>
            <p>___________</p>
        </div>
    </div>
    );
  };
  
  export default Project;
  