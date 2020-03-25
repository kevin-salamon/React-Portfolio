import React from 'react';
import './style.css';
import Project from "./components/Project";

function Portfolio() {
    return (  
      <>
      <div className="container">
        <Project 
          imgSource={"../assets/images/tablemanager.jpg"}
          alt={"tablemanager"}
          name={"Table Manager"}
          desc={"A simple, streamlined, and user-friendly application that allows restaurant owners and staff to build their custom restaurant layout from scratch, assign customers to tables, and track those customers' meals from start to finish. Uses Sequelize and Express."}
          github={"https://github.com/Chih-Chien-Lin/TableManager"}
          deployed={"https://mighty-ridge-50016.herokuapp.com/"}
        />
        <Project 
          imgSource={"../assets/images/tablemanager.jpg"}
          alt={"gamefound"}
          name={"GameFound"}
          desc={"An application that makes full use of the RAWG Database API to sort through 350,000+ games and return the perfect video game for you, based on your criteria."}
          github={"https://github.com/kevin-salamon/Game-Found"}
          deployed={"https://kevin-salamon.github.io/Game-Found/"}
        />
        <Project 
          imgSource={"../assets/images/tablemanager.jpg"}
          alt={"budget-tracker"}
          name={"Budget Tracker"}
          desc={"An application utilizing local storage DBs to track budgets whether online or offline, through the use of MongoDB/Mongoose and IndexedDB."}
          github={"https://github.com/kevin-salamon/Budget-Tracker"}
          deployed={"https://boiling-depths-85608.herokuapp.com/"}
        />
        <Project 
          imgSource={"../assets/images/tablemanager.jpg"}
          alt={"burger"}
          name={"Eat-Da-Burger / MVC"}
          desc={"An app testing the utility of the MVC and Handlebars in web development, via the creation of a burger-eating and tracking program."}
          github={"https://github.com/kevin-salamon/MVC-Handlebars"}
          deployed={"https://salty-bastion-59011.herokuapp.com/"}
        />
        <Project 
          imgSource={"../assets/images/tablemanager.jpg"}
          alt={"employee-tracker"}
          name={"Employee Directory"}
          desc={"A test of ReactJS capabilities through the creation of a sample Employee Directory. Sort and filter through the directory to find the information you need."}
          github={"https://github.com/kevin-salamon/Employee-Directory"}
          deployed={"https://kevin-salamon.github.io/Employee-Directory/"}
        />
        <Project 
          imgSource={"../assets/images/tablemanager.jpg"}
          alt={"quiz"}
          name={"Javascript Quiz"}
          desc={"A dynamically-created Javascript Quiz that will test your knowledge of the language and allow you to store and display high scores. This application was created as a test of DOM-manipulation."}
          github={"https://github.com/kevin-salamon/Employee-Directory"}
          deployed={"https://kevin-salamon.github.io/Kevin-Coding-Quiz/"}
        />
      </div>
      </>
    );
}

export default Portfolio;