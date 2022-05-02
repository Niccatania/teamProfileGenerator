const engineer = require('/Users/niccatania/Desktop/bootcamp/teamProfileGenerator/lib/Engineer.js');

test("We should return an Email", () => {
    const Engineer= new engineer("klein", 45, "klein@gmail.com",123);
        expect(Engineer.email).toBe("klein@gmail.com");
        
});
