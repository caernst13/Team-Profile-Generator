const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of this engineer?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter this engineers name')
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: 'what is this engineers id?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter this engineers id')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of this engineer?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter this engineers email')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is the gitHub of this engineer?',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter this engineers gitHub')
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

module.exports = engineerQuestions