// Engineer sub-class file that calls in the main employee class and then expands upon it
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(data) {
        super(data);
        this.github = data.github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

    getIcon() {
        return "fa-screwdriver-wrench";
    }
}

module.exports = Engineer;