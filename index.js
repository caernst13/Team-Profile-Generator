const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');
const Manager = require ('./lib/manager');

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