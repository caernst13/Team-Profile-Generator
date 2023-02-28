const initialQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your teams manager?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your managers name')
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'id',
        message: 'what is your managers id?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter your managers id')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of your teams manager?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your managers email')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the name of your teams manager?',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter your managers name')
                return false;
            }
        }
    },
];

module.exports = initialQuestions;