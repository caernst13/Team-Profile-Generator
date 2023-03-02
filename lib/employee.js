// parent class for rest of the project 
class Employee {
    // main constructer using aspects the rest will use 
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email
        this.role = role;
    };
    
    // functions for returning specific aspects 
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return this.role;
    };
};

//export so the sub classes can use
module.exports = Employee;