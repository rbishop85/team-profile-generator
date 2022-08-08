const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    const user = {
        name: "Harold",
        empID: "12",
        email: "harold@gmail.com",
        github: "harold234"
    };

    const newEngineer = new Engineer(user);

    describe("getName", () => {
        it(" should return the employee's name", () => {
            expect(newEngineer.getName()).toEqual(user.name);
        });
    });

    describe("getID", () => {
        it("should return the employee's ID", () => {
            expect(newEngineer.getId()).toEqual(user.empID);
        });
    });

    describe("getEmail", () => {
        it("should return the employee's email address", () => {
            expect(newEngineer.getEmail()).toEqual(user.email);
        });
    });

    describe("getGithub", () => {
        it("should return the employee's github user name", () => {
            expect(newEngineer.getGithub()).toEqual(user.github);
        });
    });

    describe("getRole", () => {
        it("should return the role of 'Engineer'", () => {
            expect(newEngineer.getRole()).toEqual("Engineer");
        });
    });

    describe("getIcon", () => {
        it("should return the icon code for an Engineer", () => {
            expect(newEngineer.getIcon()).toEqual("fa-screwdriver-wrench");
        });
    });
});