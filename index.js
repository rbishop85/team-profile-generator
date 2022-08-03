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
        name: "name",
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

    // then Build a manager object and push to array list

    })
}

        

        

    // Gather engineer data

        // inquirer.prompt()

        // then build an engineer object and push to array list

    // gather intern data

        // inquirer.prompt()

        // then build an intern object and push to array list


    // Ask for which team member they want to add or are they done (ends app and generates file when done)

        // Inquirer.prompt()

        // Then decide which function to call

    // Generate the html contents and write it to a file