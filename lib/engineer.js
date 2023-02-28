const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
       super(name, id, email, 'Engineer');
       this.gitHub = gitHub; 
    }
    getGitHub() {
        console.log(`The git hub user name of this employee is: ${this.gitHub}`)
    }
};

module.exports = Engineer;