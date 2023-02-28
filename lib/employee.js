class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email
        this.role = role;
    }
    getName() {
        console.log(`This employee's name is:${this.name}`);
    };
    getId() {
        console.log(`This employee's name is: ${this.id}`);
    };
    getEmail() {
        console.log(`This employee's name is: ${this.email}`);
    };
    getRole() {
        console.log(`My role is: ${this.role}`)
    }
};
module.exports = Employee;