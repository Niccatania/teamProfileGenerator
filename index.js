const inquirer= require("inquirer");
const fs= require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern= require('./lib/Intern');


const generateHTML =(data) =>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>My Team</title>
</head>
<body>
    <nav class="navbar navbar-light bg-light ">
        <div class="container-fluid  justify-content-center ">
          <span class="navbar-brandtext-center mb-0 h1  ">My Team</span>
        </div>
      </nav>

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Placeholder</h5>
          <p class="card-text">This object will need to be created using JS</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${data.ID} </li>
          <li class="list-group-item">Email: #{data.Email}</li>
          <li class="list-group-item">Github User: github.com/${data.User} </li>
        </ul>
       
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>
`
;
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
              generateFile();
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
  let engineer= new Engineer(answers.Name, answers.ID, answers.Email, answers.Num, answers.githubUser)
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
  let intern=new Intern(answers.Name, answers.ID, answers.Email, answers.Num, answers.school)
  team.push(intern)
console.log(intern)
nextUp();
});
}


function generateFile(){
  fs.writeFileSync(generateHTML,team)
}

