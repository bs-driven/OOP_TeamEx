const Engineer = require('../lib/Engineer');

describe('Engineer',()=>{
    
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

    
})