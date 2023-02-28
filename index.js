const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern');
const Manager = require ('./lib/manager');
const initialQuestions = require ('./quest/manager')
const employeeType = require ('./quest/type')
const engineerQuestions = require ('./quest/engineer')
const internQuestions = require ('./quest/intern')

console.log(initialQuestions, employeeType, engineerQuestions, internQuestions)

