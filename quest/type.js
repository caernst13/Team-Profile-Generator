const employeeType = [
    {
        type: 'list',
        name: 'employeeType',
        choices: ['engineer', 'intern'],
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