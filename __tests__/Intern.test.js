const Intern = require("../lib/Intern")

describe("Intern", () => {
    const user = {
        name: "Harold",
        empID: "12",
        email: "harold@gmail.com",
        school: "WWU"
    };

    const newIntern = new Intern(user);

    describe("getName", () => {
        it(" should return the employee's name", () => {
            expect(newIntern.getName()).toEqual(user.name);
        });
    });

    describe("getID", () => {
        it("should return the employee's ID", () => {
            expect(newIntern.getId()).toEqual(user.empID);
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            expect(newIntern.getEmail()).toEqual(user.email);
        });
    });

    describe("getSchool", () => {
        it("should return the employee's school name", () => {
            expect(newIntern.getSchool()).toEqual(user.school);
        });
    });

    describe("getRole", () => {
        it("should return the role of 'Intern'", () => {
            expect(newIntern.getRole()).toEqual("Intern");
        });
    });

    describe("getIcon", () => {
        it("should return the icon code for an Intern", () => {
            expect(newIntern.getIcon()).toEqual("fa-graduation-cap");
        });
    });
});