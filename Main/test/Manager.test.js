const Manager = require("../lib/Manager");

describe("Manager Properties", () =>{
    const employee = new Manager("Gon Freaks", 5254691, "hunterexampass@email.com", 12)
    it("should return the managers name", () =>{
        expect(employee.name).toEqual("Gon Freaks")
    });

    it("should return the manager's id number", () =>{
        expect(employee.id).toEqual(5254691)
    });

    it('should return the maangers email address', () => {
        expect(employee.email).toEqual('hunterexampass@email.com')
    });

    it("should returns the manager's office number", () =>{
        expect(employee.officeNumber).toEqual(12)
    })

});

describe("Manager methods/functions",() =>{
    const employee = new Manager("Gon Freaks", 5254691, "hunterexampass@email.com", 12)

    it("should return the managers name", () =>{
        expect(employee.getName()).toEqual('Gon Freaks')
    });

    it("should returns the manager's id number", () =>{
        expect(employee.getId()).toEqual(5254691)
    });

    it("should return the manager's email address", () => {
        expect(employee.getEmail()).toEqual('hunterexampass@email.com')
    });

    it("should returnthe managers office number", () =>{
        expect(employee.getOfficeNumber()).toEqual(12)
    });

    it("should return the managers role", () =>{
        expect(employee.getRole()).toEqual("Manager")
    });


})