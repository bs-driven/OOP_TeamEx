const Engineer = require('../lib/Engineer');

describe('Engineer properties',()=>{
    
    const employee = new Engineer('Monkey D. Luffy', 787848, 'kingofpirates@gmail.com', 'githubAccount')

       it("should return the engineers name", () => {
        expect(employee.name).toEqual('Monkey D. Luffy');
       });

       it("should return the engineers id number", () =>{
        expect(employee.id).toEqual(787848)
       });

       it('should return the engineers email address', () => {
        expect(employee.email).toEqual('kingofpirates@gmail.com')
       });
       it('should return the github account of the engineer', () => {
        expect(employee.gitHub).toEqual('githubAccount')
       })   
});

describe("Engineer methods/functions",() =>{
    const employee = new Engineer('Monkey D. Luffy', 787848, 'kingofpirates@gmail.com', 'githubAccount')

    it("should return the enginners name", () =>{
        expect(employee.getName()).toEqual('Monkey D. Luffy')
    });

    it("should returns the engineer's id number", () =>{
        expect(employee.getId()).toEqual(787848)
    });

    it("should return the engineer's email address", () =>{
        expect(employee.getEmail()).toEqual('kingofpirates@gmail.com')
    });
    
    it("should return the engineers github account", () =>{
        expect(employee.getGithub()).toEqual( 'githubAccount')
    });

    it("should return the engineers role", () =>{
        expect(employee.getRole()).toEqual("Engineer")
    });
});