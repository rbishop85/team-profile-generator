// Intern sub-class file that calls in the main employee class and then expands upon it
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(data) {
        super(data);
        this.school = data.school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    getIcon() {
        return "fa-graduation-cap";
    }
}

module.exports = Intern;