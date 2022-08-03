const inquirer = require("inquirer");
const fs = require("fs");

const pageTemplate = require("./src/page-template");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeesArray = [];

const questionsManager = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: "What is the team manager's employee ID?",
        name: "empID",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: "What is the team manager's email address?",
        name: "email",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "office",
        prefix: "-",
        validate: Boolean
    }
];

const questionsEngineer = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "empID",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username?",
        name: "github",
        prefix: "-",
        validate: Boolean
    }
];

const questionsIntern = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "empID",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
        prefix: "-",
        validate: Boolean
    },
    {
        type: "input",
        message: "What school is the intern attending?",
        name: "school",
        prefix: "-",
        validate: Boolean
    }
];

// separate everything into reusable functions so you can easily cycle back to different functions

    // gather manager data
function generateManager() {
    // inquirer.prompt()
    inquirer.prompt(questionsManager)
    .then((response) => {
    console.log(response);

    // then build a manager object and push to array list

    teamMemberChoice();

    })
}


    // Gather engineer data
function generateEngineer() {
    // inquirer.prompt()
    inquirer.prompt(questionsEngineer)
    .then((response) => {
    console.log(response);

    // then build an engineer object and push to array list

    teamMemberChoice();

    })
}

    // gather intern data
function generateIntern() {
    // inquirer.prompt()
    inquirer.prompt(questionsIntern)
    .then((response) => {
    console.log(response);

    // then build an intern object and push to array list

    teamMemberChoice();

    })
}


    // Ask for which team member they want to add or are they done (ends app and generates file when done)
function teamMemberChoice() {
    // Inquirer.prompt()
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
        console.log(response);
        // Then decide which function to call
        if(response.choice === "Engineer") {
            generateEngineer();
        } else if(response.choice === "Intern") {
            generateIntern();
        } else {
            // Take gathered data and generate html page
        }
    })
}

function init() {
    generateManager()
}

init();

        

    // Generate the html contents and write it to a file