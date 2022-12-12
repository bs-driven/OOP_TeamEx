const Engineer = require('../lib/Engineer');

describe('Engineer',()=>{
    
    const employee = new Engineer('Monkey D. Luffy', 787848, 'kingofpirates@gmail.com', 'githubAccount')
        test("test name , id , github", ()=> {
            expect(employee.name).stringMatching('Monkey D. Luffy')
            expect(employee.id).toEqual(787848)
            expect(employee.email).stringMatching('kingofpirates@gmail.com')
            expect(employee.gitHub).stringMatching('githubAccount')
        })
    
})