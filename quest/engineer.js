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
            }
        }
    },
];

module.exports = engineerQuestions