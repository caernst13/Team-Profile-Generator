const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');
const Manager = require ('./lib/manager');
const initialQuestions = require ('./quest/manager')
const employeeType = require ('./quest/type')
const engineerQuestions = require ('./quest/engineer')
const internQuestions = require ('./quest/intern')
var managers = [];
var engineers = [];
var interns = [];

const init = () => {inquirer.prompt(initialQuestions).then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    managers.push(manager)
    continueQuest();
});
};

const continueQuest = () => {inquirer.prompt(employeeType).then((data) => {
    if (data.employeeType === 'Engineer') {
        addEngineer();
    } else if (data.employeeType === 'Intern') {
        AddIntern();
    } else {
        buildPage();
    }
});
};

const addEngineer = () => {
    inquirer.prompt(engineerQuestions).then((data) => {
        const newEngineer = new Engineer(data.name, data.id, data.email, data.gitHub);
        engineers.push(newEngineer);
        continueQuest();
    });
};

const AddIntern = () => {
    inquirer.prompt(internQuestions).then((data) => {
        const newIntern = new Intern(data.name, data.id, data.email, data.school);
        interns.push(newIntern);
        continueQuest();
    });
};

const buildPage = () => {
    console.log(managers, engineers, interns)
}

init();