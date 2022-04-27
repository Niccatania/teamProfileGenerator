const inquirer= require("inquirer");
const fs= require("fs");
const employee = require('./lib/Employee');
const manager = require('./lib/Manager');
const Engineer = require('.lib/Engineer');
const Intern= require('.lib/Intern');

inquirer
.prompt([
    {
    // Assuming object class will be used
    type: "input",
      name: "manager",
      message: "Manager name:",
},
  {    type: "list",
      name: "employeeChoice",
      message: "Which employee type would you like to add?",
      choices: [
          {
            name: "Engineer",
          },
          {
            name: "Intern",
          }]
        }
// if else? 



    ])

.then(answers=> {
  console.info("Answers:", answers)
})


    // First attempt


