const employee = require('./Employee');

class Intern extends employee {
    constructor(name,id,email,school){

    super(name,id,email);

    this.school=school;
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
getSchool(){
    return this.school;
}
    getRole(){
return "Intern";
    }

}
module.exports = Intern;
  