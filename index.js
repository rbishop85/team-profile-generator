const inquirer = require("inquirer");
const fs = require("fs");

const pageTemplate = require("./src/page-template");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeesArray = [];

// separate everything into reusable functions so you can easily cycle back to different functions

    // gather manager data

        // inquirer.prompt()

        // then Build a manager object and push to array list

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