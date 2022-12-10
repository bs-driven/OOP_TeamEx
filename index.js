const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generatehtml');

function init(){
  inquirer.prompt(
      { type: 'list',
      message: 'Please create your team?',
      name: 'startQuestion',
      choices: ["Manager", "Team members","Intern ","Quit"]
      }) .then((response) =>{
      let choices = response.startQuestion
       // use a switch statement to pick the appropiate fuction for the user selction
      switch(choices){
          case "Manger":
              manager();
              break;

          case "Team members":
              teamMembers();
              break;

          case "Intern":
              Intern();
              break;
          case "Quit":
              quit();
              break;
      }
  });
}
init();


 module.exports = generateHtml