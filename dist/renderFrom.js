// const Manager = require("../lib/Manager");

// // const Manager = require('./lib/Manager');
const makeCards=(teamCard) => {
  
  const callTheManager=(manager) =>{
    return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title"> ${manager.Name} </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.ID} </li>
      <li class="list-group-item">Email: ${manager.Email}</li>
      <li class="list-group-item">Office Number: ${manager.Num} </li>
    </ul>
   `;

  };

  const whereMyEngineer = (engineer) => {
    return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${engineer.Name}</h5>
        <h4></h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.ID} </li>
      <li class="list-group-item">Email: ${engineer.Email}</li>
      <li class="list-group-item">Github User: github.com/${engineer.githubUser} </li>
    </ul>
`
  }

const weNeedIntern =(intern) =>{
  return`
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.Name}</h5>
      <h4></h4>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.ID} </li>
    <li class="list-group-item">Email: ${intern.Email}</li>
    <li class="list-group-item">School: ${intern.School} </li>
  </ul>
  `
};

const cardArr= [];

cardArr.push(teamCard
  .filter((employee) => employee.getRole() === "Manager")
  .map((manager) => callTheManager(manager))
);
cardArr.push(teamCard
  .filter((employee) => employee.getRole() === "Engineer")
  .map((engineer) => whereMyEngineer(engineer))
  .join("")
);
cardArr.push(teamCard
  .filter((employee) => employee.getRole() === "Intern")
  .map((intern) => weNeedIntern(intern))
  .join("")
);

return cardArr.join("");
};


module.exports = (teamCard)=>{
return`
<!DOCTYPE html>
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

<div>
${makeCards(teamCard)}
<div>
  
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>`

}