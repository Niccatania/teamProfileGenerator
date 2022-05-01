const inquirer= require("inquirer");
const fs= require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern= require('./lib/Intern');
const makeCards= require("./dist/renderFrom.js")

const team= []


inquirer
.prompt([
    {
    type: "input",
      name: "Name",
      message: "Manager name:",
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
      name: "Num",
      message: "Manager office number:",

      }])
      .then(function(answers){
        let manager=new Manager(answers.Name, answers.ID, answers.Email, answers.Num)
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
    name: "School",
    message: "What is the Intern's School?:"

}
])
.then(function(answers){
  let intern=new Intern(answers.Name, answers.ID, answers.Email, answers.School)

  team.push(intern)
  
console.log(intern)
nextUp();
});
}

function endProcess(){
  console.log(team);
  fs.writeFileSync(
    "./index.html",
    makeCards(team),"utf-8"
  );
  
  // fs.writeFile("index.html",htmlPage(team))
  // console.log("Successfully created index.html!")
}
