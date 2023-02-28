const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       super(name, id, email, 'Manager');
       this.officeNumber = officeNumber; 
    }
    getOfficeNumber() {
        console.log(`This managers office number is: ${this.officeNumber}`)
    }
};

module.exports = Manager;