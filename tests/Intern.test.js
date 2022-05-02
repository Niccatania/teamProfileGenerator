const Intern = require('/Users/niccatania/Desktop/bootcamp/teamProfileGenerator/lib/Intern.js');

test("We should retun the intern's school", () => {
    const intern= new Intern("klein", 45, "klein@gmail.com","UW");
        expect(intern.school).toBe("UW");
        
});
