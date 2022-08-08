// Manager sub-class file that calls in the main employee class and then expands upon it
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(data) {
        super(data);
        this.officeNumber = data.office;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getIcon() {
        return "fa-dragon";
    }
}

module.exports = Manager;