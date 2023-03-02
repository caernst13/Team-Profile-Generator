//question asked when the user decides if they want to add another emplpoyee or stop and make the html page
const employeeType = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'would you like to cintunue or add another employee?',
        choices: ['Engineer', 'Intern', 'All finished!'],
        validate: employeeTypeInput => {
            if (employeeTypeInput) {
                return true;
            } else {
                console.log('please select an employee to add')
            }
        }
    }
];

module.exports = employeeType