// arrray of questions asked when the user wants to add the manager
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
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'What is the office number of your teams manager?',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter your managers office number')
            }
        }
    },
];

module.exports = initialQuestions;