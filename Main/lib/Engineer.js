const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(github){

     this.github = github;
    }

    getRole(){
        if (this.role === true){
        return "Engineer";
    }
    };
    getGithub(){

    };


}