//array of questions asked when the user wants to add an intern
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
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'what school does this intern attend?',
        validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                console.log('Please enter what school this intern attends ')
            }
        }
    }
];

module.exports = internQuestions