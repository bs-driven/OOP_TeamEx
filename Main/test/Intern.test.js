const Intern = require("../lib/Intern")

describe("Intern properties", ()=>{
    const employee = new Intern('Killua Zoldic', 546952, 'silentkill@gmail.com', 'OSU')
    it("should return the intern's name", () =>{
        expect(employee.name).toEqual('Killua Zoldic')
    });

    it("should return the intern's id number", () =>{
        expect(employee.id).toEqual(546952)
    });

    it("should return the intern's email address",()=>{
        expect(employee.email).toEqual('silentkill@gmail.com')
    });

    it("should returns the intern's school", () =>{
        expect(employee.school).toEqual('OSU')
    });
});


describe("Intern methods/functions",() =>{
    const employee = new Intern('Killua Zoldic', 546952, 'silentkill@gmail.com', 'OSU')

    it("should return the interns name", () =>{
        expect(employee.getName()).toEqual('Killua Zoldic')
    });

    it("should returns the intern's id number", () =>{
        expect(employee.getId()).toEqual(546952)
    });

    it("should return the interns email address", () => {
        expect(employee.getEmail()).toEqual('silentkill@gmail.com')
    });

    it("should return the school that the intern attends", () =>{
        expect(employee.getSchool()).toEqual('OSU')
    });

    it("should return the interns role", () =>{
        expect(employee.getRole()).toEqual("Intern")
    });


})