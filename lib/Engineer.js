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