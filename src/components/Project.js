import React from 'react';
import '../style.css';

function Project(props) {

    return (
        <div className="container" style={{width: "900px", margin: "1%"}}>
            <div className="row jumbotron-portfolio rounded pt-3">
                <div className="col-sm-6">
                    <img src={props.imgSource} alt={props.alt} className="split-image rounded"/>
                </div>
                <div className="col-sm-6" style={{textAlign: "center"}}>
                    <h1>{props.name}</h1>
                    <p>{props.desc}</p>
                    <p>___________</p>
                    <a href={props.github} target="#" style={{color: "black"}}>Github</a>
                    <p>___________</p>
                    <a href={props.deployed} target="#" style={{color: "black"}}>Deployed Site</a>
                    <p>___________</p>
                </div>
            </div>
        </div>
    );
};
  
export default Project;
  