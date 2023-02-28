const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of this intern?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter this interns name')
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: 'what is this interns id?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter this interns id')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of this intern?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter this interns email')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'what school does this intern attend?',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter what school this intern attends ')
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'continue',
        choices: ['Continue?', 'All finished!'],
        validate: continueInput => {
            if (continueInput) {
                return true;
            } else {
                console.log('please select an option')
            }
        }
    }
];

module.exports = internQuestions