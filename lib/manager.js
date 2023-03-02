//import parent class
const Employee = require('./employee');

//creates subclass
class Manager extends Employee {
    //constroctor that takes in the information user will provide and super that references the parent class 
    constructor(name, id, email, officeNumber) {
       super(name, id, email, 'Manager');
       this.officeNumber = officeNumber; 
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
};

//export statement
module.exports = Manager;