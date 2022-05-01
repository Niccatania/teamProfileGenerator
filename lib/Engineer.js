const employee = require('./Employee');

class Engineer extends employee {
    constructor(name,id,email,githubUser){

    super(name,id,email);

    this.githubUser=githubUser;
}
getName(){
    return this.name;
}
getId(){
    return this.id;

}
getEmail(){
    return this.email
}

getGithub(){
    return this.githubUser;
}

    getRole(){
return "Engineer";
    }

    

}
module.exports = Engineer;
  