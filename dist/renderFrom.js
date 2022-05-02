
const makeCards=(teamCard) => {
  
  const callTheManager=(manager) =>{
    return`
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-info ">
      <h5 class="card-title">${manager.name} </h5>
      <h6>Manager</h6>
    </div>
    <div class= card-body>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID:${manager.id} </li>
      <li class="list-group-item">Email: <a href="mailto:">${manager.email}</a></li>
      <li class="list-group-item">Office Number:${manager.officeNumber} </li>
    </ul>
    </div>
    </div>
    </div>
   `;

  };

  const whereMyEngineer = (engineer) => {
    return`
    <div class="col-12 col-md-6 col-lg-4">
    <div class="card" style="width: 18rem;">
    <div class="card-header bg-info">
      <h5 class="card-title">${engineer.name}</h5>
      <h6>Engineer</h6>
    </div>
    <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id} </li>
      <li class="list-group-item">Email: <a href="mailto:">${engineer.email}</a> </li>
      <li class="list-group-item">Github User: <a href="https://github.com/${engineer.githubUser}">${engineer.githubUser}</a> </li>
    </ul>

    </div>
    </div>
    </div>
`
  }

const weNeedIntern =(intern) =>{
  return`
  <div class="col-12 col-md-6 col-lg-4">
  <div class="card" style="width: 18rem;">
  <div class="card-header bg-info">
  
    <h5 class="card-title">${intern.name}</h5>
    <h6>Intern</h6>
      
  </div>
  <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id} </li>
    <li class="list-group-item"> <a href="mailto:">${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.school} </li>
  </ul>
  </div>
  </div>
  </div>
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
    <nav class="navbar navbar-light bg-primary ">
        <div class="container-fluid  justify-content-center ">
          <span class="navbar-brandtext-center mb-0 h1  ">My Team</span>
        </div>
      </nav>

<div class="pt-5">
<div class="container">
<div class="row">
${makeCards(teamCard)}
</div>
</div>
</div>
  
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</html>`

}