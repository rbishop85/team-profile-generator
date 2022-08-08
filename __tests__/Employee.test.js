const Employee = require("../lib/Employee")

describe("Employee", () => {
    const user = {
        name: "Harold",
        empID: "12",
        email: "harold@gmail.com"
    };

    const newEmployee = new Employee(user);

    describe("getName", () => {
        it(" should return the employee's name", () => {
            expect(newEmployee.getName()).toEqual(user.name);
        });
    });

    describe("getID", () => {
        it("should return the employee's ID", () => {
            expect(newEmployee.getId()).toEqual(user.empID);
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            expect(newEmployee.getEmail()).toEqual(user.email);
        });
    });

    describe("getRole", () => {
        it("should return the role of 'Employee'", () => {
            expect(newEmployee.getRole()).toEqual("Employee");
        });
    });
    
});