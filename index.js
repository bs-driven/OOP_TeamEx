const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./Main/lib/Employee');
const Engineer = require('./Main/lib/Engineer');
const Intern = require('./Main/lib/Intern');
const Manager = require('./Main/lib/Manager');
const generateHtml = require('./Main/src/generatehtml');
const team = []

function addMembers () {
  inquirer.prompt(
      { type: 'list',
      message: 'Please select a team member to introduce?',
      name: 'startQuestion',
      choices: ["Engineer","Intern","Quit"]
      }) .then((response) =>{
      let choices = response.startQuestion
       // use a switch statement to pick the appropiate fuction for the user selction
      switch(choices){
      
          case "Engineer":
            engineerInfo();
              break;

          case "Intern":
              internInfo();
              break;
          case "Quit":
              quit();
              break;
      }
  });
};

function startQuestion () {
    managerInfo();
}


function managerInfo() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter the managers name.',
            name: 'managerName'
        },
        {
            type: 'input',
            message: 'Please enter the managers id number.',
            name:'managerID'
        },
        {
            type: 'input',
            message: 'Please enter the managers email address.',
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: 'Please enter the mangers office number',
            name: 'managerOfficeNumber'
        }
    ]).then(response =>{
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOfficeNumber);
        team.push(manager);
        addMembers();

    })
}

function engineerInfo() {
    inquirer.prompt(
       [ {
            type: 'input',
            message: 'Please enter the engineers name.',
            name: 'engineerName'
        },
        {
            type: 'input',
            message: 'Please enter the engineeers id number.',
            name:'engineerID'
        },
        {
            type: 'input',
            message: 'Please enter the engineers email address.',
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: 'please enter th4e engineers github account name.',
            name: 'engineerGithubName'
        }        
    ]).then(response =>{
        const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithubName);
        team.push(engineer);
        addMembers();
  
    })

};

function internInfo() {
    inquirer.prompt(
       [ {
            type: 'input',
            message: 'Please enter the interns name.',
            name: 'internName'
        },
        {
            type: 'input',
            message: 'Please enter the interns id number.',
            name:'internID'
        },
        {
            type: 'input',
            message: 'Please enter the interns email address.',
            name: 'internEmail'
        },
        {
            type: 'input',
            message: 'Please enter the intern school.',
            name: 'internSchool'
        }
    ]).then(response => {
        const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
        team.push(intern);
        addMembers();
    })

}
function quit() {
    console.log("team = ", team);
    fs.writeFileSync(path.join(__dirname,"Main/dist/team.html"), generateHtml(team),"utf-8")

  };

console.log(team)

startQuestion();


