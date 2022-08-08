const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = require("./src/page-template");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeesList = [];

const baseQuestions = [
    {
        type: "input",
        message: `What is the 's name?`,
        name: "name",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: `What is the 's employee ID?`,
        name: "empID",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: `What is the 's email address?`,
        name: "email",
        prefix: "-",
        validate: Boolean
    }
];

    // gather manager data
function generateManager() {
    const employeeRole = "team manager"
    const questionsManager = JSON.parse(JSON.stringify(baseQuestions));

     for (let i = 0; i < questionsManager.length; i++) {
        const a = questionsManager[i].message;
        questionsManager[i].message = [a.slice(0, 12), employeeRole, a.slice(12)].join('');
     }

    questionsManager.push(
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "office",
            prefix: "-",
            validate: Boolean
        }
    );

    inquirer.prompt(questionsManager)
    .then((response) => {

        const newManager = new Manager(response);
        employeesList.push(newManager);

        teamMemberChoice();

    })
}


    // Gather engineer data
function generateEngineer() {
    const employeeRole = "engineer"
    const questionsEngineer = JSON.parse(JSON.stringify(baseQuestions));

     for (let i = 0; i < questionsEngineer.length; i++) {
        const a = questionsEngineer[i].message;
        questionsEngineer[i].message = [a.slice(0, 12), employeeRole, a.slice(12)].join('');
     }

    questionsEngineer.push(
        {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github",
            prefix: "-",
            validate: Boolean
        }
    );

    inquirer.prompt(questionsEngineer)
    .then((response) => {

        const newEngineer = new Engineer(response);
        employeesList.push(newEngineer);

        teamMemberChoice();

    })
}

    // gather intern data
function generateIntern() {
    const employeeRole = "intern"
    const questionsIntern = JSON.parse(JSON.stringify(baseQuestions));

     for (let i = 0; i < questionsIntern.length; i++) {
        const a = questionsIntern[i].message;
        questionsIntern[i].message = [a.slice(0, 12), employeeRole, a.slice(12)].join('');
     }

    questionsIntern.push(
        {
            type: "input",
            message: "What school is the intern attending?",
            name: "school",
            prefix: "-",
            validate: Boolean
        }
    );

    inquirer.prompt(questionsIntern)
    .then((response) => {

        const newIntern = new Intern(response);
        employeesList.push(newIntern);

        teamMemberChoice();

    })
}


    // Ask for which team member they want to add or are they done (ends app and generates file when done)
function teamMemberChoice() {
    // Inquirer.prompt()
    console.log("");
    inquirer.prompt([
        {
        type: 'list',
        message: 'What type of team member would you like to add next?',
        name: 'choice',
        choices: ['Engineer', 'Intern', "None, I am done adding team members"],
        prefix: '-'
        }
    ])
    .then((response) => {
        console.log("");
        // Then decide which function to call
        if(response.choice === "Engineer") {
            generateEngineer();
        } else if(response.choice === "Intern") {
            generateIntern();
        } else {
            // Take gathered data and generate html page
            console.log(generateHTML(employeesList));
        }
    })
}

function writeToFile() {

}

function init() {
    console.log("");
    generateManager()
}

init();

        

    // Generate the html contents and write it to a file