const inquirer= require("inquirer");
const fs= require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
// const Engineer = require('.lib/Engineer');
// const Intern= require('.lib/Intern');

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
      nextUp()});
       
    
function nextUp(){
  inquirer
.prompt([
  {
type:"list",
name:"employeeChoice",
message: "Which employee type would you like to add?",
choices: [
          {
            name: "Engineer",
          },
          {
            name: "Intern",
          },
          {
            name: "teamComplete!"
          }]
        },
        {
          type:"input",
          name:"gitHub",
          message:"What is the Engineers github userName?:",
          when:(answers) => answers.employeeChoice === "Engineer"
        },
        {
          type:"input",
          name:"School",
          message:"What is the Interns School?:",
          when:(answers) => answers.employeeChoice === "Intern"
        },
        {
          type:"function",
          name:generateHTML(),
          when:(answers) => answers.employeeChoice === "teamComplete!"
        }

])
  // Enginfo()

}
// if choice====Engineer 
// inquirer
// .prompt([
//   {
//   // Assuming object class will be used
//   type: "input",
//     name: "manName",
//     message: "Manager name:",
//   },
//   {
//     type: "input",
//     name: "manID",
//     message: "ID:",},
//     {
   
//     type: "input",
//     name: "manEmail",
//     message: "Email:",
//     },
//     {
//     type: "input",
//     name: "manHub",
//     message: "What is the Engineers github userName?:",

//     }])
// else choice === Intern
// // inquirer
// .prompt([
//   {
//   // Assuming object class will be used
//   type: "input",
//     name: "manName",
//     message: "Intern name:",
//   },
//   {
//     type: "input",
//     name: "manID",
//     message: "ID:",},
//     {
   
//     type: "input",
//     name: "manEmail",
//     message: "Email:",
//     },
//     {
//     type: "input",
//     name: "school",
//     message: "What is the Interns School:",

// else if { generateHTML();

// }



// .then(answers=> {
//   console.info("Answers:", answers)
// })


    // First attempt
function generateHTML()
{
  console.log(manager)
}
// Write to FS
