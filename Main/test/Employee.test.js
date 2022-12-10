const Employee = require("../lib/Employee");

describe("Employee", () =>{
    describe("name", () => {
        it("should return a string of the employees name", () => {
            const name = "Bradley Samuel";
            result = new Employee().toEqual(name);
            expect(Employee.name).stringContaining(name);
        });
        it("should return a number for the id", () =>{
            const id = 1578956;
            expect(Employee.id).toBeCloseTo(id)
        });
        it('should return the employees email address', () => {
            const email = 'b_man_sam@gmail.com'
            expect(Employee.email).stringContaining(email)
        });
    })
})