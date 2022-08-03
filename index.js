const inquirer = require("inquirer");
const fs = require("fs");

const pageTemplate = require("./src/page-template");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employeesArray = [];