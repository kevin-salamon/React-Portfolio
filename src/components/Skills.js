import React from 'react';
import '../style.css';

function Skills() {

    return (
        <div className="skills-container">
            <div className="skill-area-title">
                <h1>Skills and Tools</h1>
            </div>
            <div className="skills-section-flex" style={{borderTop: "3px solid silver"}}>
                <div className="skill-box-title">
                    <h1>Front-end</h1>
                </div>
                <div className="skill-box">
                    <h1>React.js</h1>
                    <h1>Javascript</h1>
                </div>
                <div className="skill-box">
                    <h1>JQuery</h1>
                    <h1>Redux</h1>
                </div>
                <div className="skill-box">
                    <h1>Handlebars.js</h1>
                    <h1>CSS3/Bootstrap/Flexbox</h1>
                </div>
            </div>
            <div className="skills-section-flex">
                <div className="skill-box-title">
                    <h1>Back-end</h1>
                </div>
                <div className="skill-box">
                    <h1>Node.js</h1>
                    <h1>Express.js</h1>
                </div>
                <div className="skill-box">
                    <h1>MongoDB / NoSQL</h1>
                    <h1>MySQL</h1>
                </div>
                <div className="skill-box">
                    <h1>Sequelize.js</h1>
                    <h1>JSON</h1>
                </div>
                </div>
            <div className="skills-section-flex" style={{borderBottom: "3px solid silver"}}>
                <div className="skill-box-title">
                    <h1 className="text-center">Additional Skills</h1>
                </div>
                <div className="skill-box">
                    <h1>RESTful API</h1>
                    <h1>Git / GitHub</h1>
                </div>
                <div className="skill-box">
                    <h1>PWAs</h1>
                    <h1>VSCode</h1>
                </div>
                <div className="skill-box empty-box"></div>
            </div>
        </div>
    );
  };
  
  export default Skills;