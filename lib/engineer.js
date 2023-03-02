//import parent class
const Employee = require('./employee');

//creating subclass
class Engineer extends Employee {
   //constructor that takes in the information user will provide and super that references the parent class
    constructor(name, id, email, gitHub) {
       super(name, id, email, 'Engineer');
       this.gitHub = gitHub; 
    };

    getGitHub() {
       return this.gitHub;
    };
};

//export statement
module.exports = Engineer;