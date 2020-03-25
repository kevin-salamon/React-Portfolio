import React from 'react';
import './style.css';

function Portfolio() {
    return (  
      <>
      <div ClassName="jumbotron jumbotron-portfolio mt-3" style={{height:"200px", backgroundColor: "purple", border:" 8px solid black"}}>
        <h1 ClassName="display-4" style={{textAlign: "center", color: "white"}}>My Portfolio</h1>
      </div>
    
      <div ClassName="jumbotron jumbotron-portfolio" id="slot1" alt="slot1">
        <h1 ClassName="display-4" style={{textAlign: "center", paddingTop: "5%", color: "purple"}}>Table Manager</h1>
        <p ClassName="lead" style={{textAlign: "center", backgroundColor: "black"}}>A simple, streamlined, and user-friendly application that allows restaurant owners and staff 
        to build their custom restaurant layout from scratch, assign customers to tables, and track those customers' meals from start to finish. Uses Sequelize and Express.</p>
      </div>
    
      <div ClassName="jumbotron jumbotron-portfolio" id="slot2" alt="slot2">
        <h1 ClassName="display-4" style={{textAlign: "center", paddingTop: "5%", color: "purple"}}>GameFound</h1>
        <p ClassName="lead" style={{textAlign: "center", backgroundColor: "black"}}>An application that makes full use of the RAWG Database API to sort through 350,000+ games and return the perfect video game for you, based on your criteria.</p>
      </div>
    
      <div ClassName="jumbotron jumbotron-portfolio" id="slot3" alt="slot3">
        <h1 ClassName="display-4" style={{textAlign: "center", paddingTop: "5%", color:"purple"}}>Team Profile Generator</h1>
        <p ClassName="lead" style={{textAlign: "center", backgroundColor: "black"}}>A command-line interface application that will generate sample user profiles for a software development team, based on user input. 
        It then builds you your own HTML page with that information, formatted for easy use!</p>
      </div>
    
      <div ClassName="jumbotron jumbotron-portfolio" id="slot4" alt="slot4">
        <h1 ClassName="display-4" style={{textAlign: "center", paddingTop: "5%", color: "purple"}}>Employee Tracker</h1>
        <p ClassName="lead" style={{textAlign: "center", backgroundColor: "black"}}>An application using Node.js and SQL/mySQL to track and manage a database containing all information about employees, company roles, and departments in your company.</p>
      </div>
    
      <div ClassName="jumbotron jumbotron-portfolio" id="slot5" alt="slot5">
        <h1 ClassName="display-4" style={{textAlign: "center", paddingTop: "5%", color: "black"}}>EAT-DA-BURGER</h1>
        <p ClassName="lead" style={{textAlign: "center", backgroundColor: "black"}}>An application made to test the MVC model and Express Handlebars. Choose your burger and eat it!</p>
      </div>

      <div ClassName="jumbotron jumbotron-portfolio" id="slot6" alt="slot6">
        <h1 ClassName="display-4" style={{textAlign: "center", paddingTop: "5%", color: "black"}}>Budget Tracker</h1>
        <p ClassName="lead" style={{textAlign: "center", backgroundColor: "black"}}>An application utilizing local storage DBs to track budgets whether online or offline, through the use of MongoDB/Mongoose and IndexedDB.</p>
      </div>
      </>
    );
}

export default Portfolio;