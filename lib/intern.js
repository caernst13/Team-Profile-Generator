//import parent class
const Employee = require('./employee');

//creating subclass
class Intern extends Employee {
    //constructor that takes in the information user will provide and super that references the parent class
    constructor(name, id, email, school) {
       super(name, id, email, 'Intern');
       this.school = school; 
    };

    getSchool() {
        return this.school;
    };
};

//export statement
module.exports = Intern;