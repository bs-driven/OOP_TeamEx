const Employee = require("../lib/Employee");

describe("Employee properties", () =>{
    describe("name", () => {
        const employee = new Employee('Bradley Samuel', 1578956, 'b_man_sam@gmail.com' )
        it("should return a string of the employees name", () => {
            expect(employee.name).toEqual("Bradley Samuel");
        });
        it("should return a number for the id", () =>{
            
            expect(employee.id).toEqual(1578956)
        });
        it('should return the employees email address', () => {
           
            expect(employee.email).toEqual('b_man_sam@gmail.com')
        });
    })
});

describe("Empolyee methods/functions", ()=>{
    const employee = new Employee('Bradley Samuel', 1578956, 'b_man_sam@gmail.com')

    it("should retuen the employees name", ()=>{
        expect(employee.getName()).toEqual('Bradley Samuel')
    });

    it("should return the employees id number", ()=>{
        expect(employee.getId()).toEqual(1578956)
    });
    
    it("should return the employee's email address", () =>{
        expect(employee.getEmail()).toEqual('b_man_sam@gmail.com')

    })

})