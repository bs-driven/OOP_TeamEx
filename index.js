const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Main/lib/Employee');
const Engineer = require('./Main/lib/Engineer');
const Intern = require('./Main/lib/Intern');
const Manager = require('./Main/lib/Manager');
const generateHtml = require('./src/generatehtml');

function starterQuestions(){
  inquirer.prompt(
      { type: 'list',
      message: 'Please create your team?',
      name: 'startQuestion',
      choices: ["Manager", "Engineer","Intern ","Quit"]
      }) .then((response) =>{
      let choices = response.startQuestion
       // use a switch statement to pick the appropiate fuction for the user selction
      switch(choices){
          case "Manger":
              manager();
              break;

          case "Team members":
              enginner();
              break;

          case "Intern":
              intern();
              break;
          case "Quit":
              quit();
              break;
      }
  });
}
init();


