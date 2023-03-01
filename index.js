const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');
const Manager = require ('./lib/manager');
const initialQuestions = require ('./quest/manager')
const employeeType = require ('./quest/type')
const engineerQuestions = require ('./quest/engineer')
const internQuestions = require ('./quest/intern')

const init = () => {inquirer.prompt(initialQuestions).then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    teypeQuest();
});
};

const teypeQuest = () => {inquirer.prompt(employeeType).then((data) => {
    if (data.employeeType === 'Engineer') {
        addEngineer();
    } else {
        AddIntern();
    };
});
};

const addEngineer = () => {
    inquirer.prompt(engineerQuestions).then((data) => {
        console.log(data);
    });
};

const AddIntern = () => {
    inquirer.prompt(internQuestions).then((data) => {
        console.log(data);
    });
};

init();