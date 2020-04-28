import React from 'react';
import './style.css';
import ProjectNew from "./components/ProjectNew";

function Portfolio() {
    return (  
      <>
      <div className="flex-container">
        <ProjectNew 
          background={require("./assets/images/voca.png")}
          name={"Voca"}
          desc={"Designed for the 2020 Hacknow Calhacks hackathon for COVID-19 relief, this app will allow the user to simplify their job search and easily track their progress. Uses React front-end and Flask back-end, with MongoDB."}
          github={"https://github.com/kevin-salamon/Voca"}
          deployed={"https://devpost.com/software/voca"}
        />
        <ProjectNew 
          background={require("./assets/images/tablify.png")}
          name={"Tablify"}
          desc={"A simple, streamlined, and user-friendly web application that allows restaurant owners and staff to build their custom restaurant layout from scratch, assign customers to tables, and track those customers' meals from start to finish. Uses the MERN stack."}
          github={"https://github.com/kimiadarden/Tablify"}
          deployed={"https://guarded-stream-41487.herokuapp.com/"}
        />
        <ProjectNew 
          background={require("./assets/images/momsite.png")}
          name={"Journalism Portfolio"}
          desc={"A personal web design for Maureen Salamon, health writer and journalist."}
          github={"https://github.com/kevin-salamon/Maureen-Portfolio"}
          deployed={"https://kevin-salamon.github.io/Maureen-Portfolio/"}
        />
        <ProjectNew
          background={require("./assets/images/gamefound.jpg")}
          name={"GameFound"}
          desc={"An application that makes full use of the RAWG Database API to sort through 350,000+ games and return the perfect video game for you, based on your criteria."}
          github={"https://github.com/kevin-salamon/Game-Found"}
          deployed={"https://kevin-salamon.github.io/Game-Found/"}
        />
        </div>
      </>
    );
}

export default Portfolio;