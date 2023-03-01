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
        buildStart();
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

const buildStart = () => {
    const start = `<!DOCTYPE html>
    <html lang="en-US">
    
      <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/style.css">
        <title>My Team</title>
      </head>
    
    <body>
    <div class="row justify-content-md-center .bg-danger .text-white font-weight-bold">My Team</div>
    <div class="row justify-content-md-center p-12">
        <div class="card p-12" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Manager: ${managers[0].name}</h5>
              <p class="card-text">ID: ${managers[0].id}</p>
              <p class="card-text">email: ${managers[0].email}</p>
              <p class="card-text">Office number: ${managers[0].officeNumber}</p>
              <a href="mailto: ${managers[0].email}" class="btn btn-primary">Send Email</a>
            </div>
          </div>
    </div>
    <div class="container d-flex flex-wrap align-items-center">`

    fs.writeFile('index.html', start, (err) =>
err ? console.log(err) : console.log('Successfully created index.html!')
);
finishBuild();
}

const finishBuild = () => {
        for (let i = 0; i < engineers.length; i++) {
            const engineerData = `<div class="card p-12" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${engineers[i].role}: ${engineers[i].name}</h5>
              <p class="card-text">ID: ${engineers[i].id}</p>
              <p class="card-text">email: ${engineers[i].email}</p>
              <a href="mailto: ${engineers[i].email}" class="btn btn-primary">Send Email</a>
              <p class="card-text">gitHub username: ${engineers[i].gitHub}</p>
              <a href="github.com/${engineers[i].gitHub}" class="btn btn-primary">gitHub link</a>
            </div>
          </div>`

          fs.appendFile('index.html', engineerData, (err) =>
          err ? console.log(err) : console.log('Successfully updated index.html!')
          );
        }
        for (let k = 0; k < interns.length; k++) {
            const internData = `<div class="card p-12" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${interns[k].role}: ${interns[k].name}</h5>
              <p class="card-text">ID: ${interns[k].id}</p>
              <p class="card-text">email: ${interns[k].email}</p>
              <a href="mailto: ${interns[k].email}" class="btn btn-primary">Send Email</a>
              <p class="card-text">School: ${interns[k].school}</p>
              link</a>
            </div>
          </div>`

          fs.appendFile('index.html', internData, (err) =>
          err ? console.log(err) : console.log('Successfully updated index.html!')
          );
        }
        fs.appendFile('index.html', `</div>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
        </body>
        </html> `, (err) =>
        err ? console.log(err) : console.log('Successfully updated index.html!')
        );
}


init();



