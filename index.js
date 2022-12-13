const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./Main/lib/Employee');
const Engineer = require('./Main/lib/Engineer');
const Intern = require('./Main/lib/Intern');
const Manager = require('./Main/lib/Manager');
const generateHtml = require('./Main/src/generatehtml');
const team = []

function startQuestion () {
  inquirer.prompt(
      { type: 'list',
      message: 'Please select a team member to introduce?',
      name: 'startQuestion',
      choices: ["Manager", "Engineer","Intern ","Quit"]
      }) .then((response) =>{
      let choices = response.startQuestion
       // use a switch statement to pick the appropiate fuction for the user selction
      switch(choices){
          case "Manger":
              managerInfo();
              break;

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



function managerInfo() {
    inquirer.propmt(
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
    ).then(response =>{
        const manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.mangerOfficeNumber);
        team.push(manager);
        fs.writeFile('',generateHtml(manager),(err)=>{
            if(err)
            console.log(err);
            else{
                console.log("File written succefully")
            }
        })
    })
}

function engineerInfo() {
    inquirer.prompt(
        {
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
    ).then(response =>{
        const engineeer = new Engineer(response.engineeerName, response.engineeerID, response.engineeerEmail, response.engineeerGithubName);
        team.push(engineeer);
        fs.writeFile('',generateHtml(engineeer),(err)=>{
            if(err)
            console.log(err);
            else{
                console.log("File written succefully")
            }
        })
    })

};

function internInfo() {
    inquirer.prompt(
        {
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
    ).then(response => {
        const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
        team.push(intern);
        fs.writeFile('',generateHtml(intern),(err)=>{
            if(err)
            console.log(err);
            else{
                console.log("File written succefully")
            }
        })

    })

}

console.log(team)

startQuestion();


