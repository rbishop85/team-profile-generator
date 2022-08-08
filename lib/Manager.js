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