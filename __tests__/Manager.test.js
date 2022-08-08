const Manager = require("../lib/Manager")

describe("Manager", () => {
    const user = {
        name: "Harold",
        empID: "12",
        email: "harold@gmail.com",
        office: "201"
    };

    const newManager = new Manager(user);

    describe("getName", () => {
        it(" should return the employee's name", () => {
            expect(newManager.getName()).toEqual(user.name);
        });
    });

    describe("getID", () => {
        it("should return the employee's ID", () => {
            expect(newManager.getId()).toEqual(user.empID);
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            expect(newManager.getEmail()).toEqual(user.email);
        });
    });

    describe("getOfficeNumber", () => {
        it("should return the employee's office number", () => {
            expect(newManager.getOfficeNumber()).toEqual(user.office);
        });
    });

    describe("getRole", () => {
        it("should return the role of 'Manager'", () => {
            expect(newManager.getRole()).toEqual("Manager");
        });
    });

    describe("getIcon", () => {
        it("should return the icon code for an Manager", () => {
            expect(newManager.getIcon()).toEqual("fa-dragon");
        });
    });
});