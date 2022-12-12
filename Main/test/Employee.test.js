const Employee = require("../lib/Employee");

describe("Employee", () =>{
    describe("name", () => {
        const employee = new Employee('Bradley Samuel', 1578956, 'b_man_sam@gmail.com' )
        it("should return a string of the employees name", () => {
            // result = new Employee().toEqual(name);
            expect(employee.name).toEqual("Bradley Samuel");
        });
        it("should return a number for the id", () =>{
            
            expect(employee.id).toEqual(1578956)
        });
        it('should return the employees email address', () => {
           
            expect(employee.email).toEqual('b_man_sam@gmail.com')
        });
    })
})