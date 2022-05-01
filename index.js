const inquirer= require("inquirer");
const fs= require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern= require('./lib/Intern');

const team= []

inquirer
.prompt([
    {
    type: "input",
      name: "manName",
      message: "Manager name:",
    },
    {
      type: "input",
      name: "manID",
      message: "ID:",},
      {
     
      type: "input",
      name: "manEmail",
      message: "Email:",
      },
      {
      type: "input",
      name: "manNum",
      message: "Manager office number:",

      }])
      .then(function(answers){
        let manager=new Manager(answers.manName, answers.manID, answers.manEmail, answers.manNum)
        team.push(manager)
     console.log(manager);
      nextUp()
    });
       
    
function nextUp() {
  inquirer
.prompt([
  {
type:"list",
name:"employeeChoice",
message: "Which employee type would you like to add?",
choices: ["Engineer","Intern","teamComplete"],
  }
        ])
          .then((answers) => {
            if(answers.employeeChoice === "Engineer") {
              engineerChosen();
            } else if (answers.employeeChoice === "Intern") {
              internChosen();
            }
            else{
              endProcess();
            }
    });
  }
     
function engineerChosen(){
inquirer
.prompt([
  {
 
  type: "input",
    name: "Name",
    message: "Engineer name:",
  },
  {
    type: "input",
    name: "ID",
    message: "ID:",},
    {
   
    type: "input",
    name: "Email",
    message: "Email:",
    },
    {
    type: "input",
    name: "githubUser",
    message: "What is the Engineer's Github username?:"

}
])
.then(function(answers){
  let engineer= new Engineer(answers.Name, answers.ID, answers.Email, answers.githubUser)
  team.push(engineer)
console.log(engineer)
nextUp();
});
}
   
function internChosen(){
inquirer
.prompt([
  {
 
  type: "input",
    name: "Name",
    message: "Intern name:",
  },
  {
    type: "input",
    name: "ID",
    message: "ID:",},
    {
   
    type: "input",
    name: "Email",
    message: "Email:",
    },
    {
    type: "input",
    name: "school",
    message: "What is the Intern's School?:"

}
])
.then(function(answers){
  let intern=new Intern(answers.Name, answers.ID, answers.Email, answers.school)
  team.push(intern)
console.log(intern)
nextUp();
});
}

function endProcess(){
  console.log(team);
}