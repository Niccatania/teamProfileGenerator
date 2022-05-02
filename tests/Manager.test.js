const manager = require('/Users/niccatania/Desktop/bootcamp/teamProfileGenerator/lib/Manager.js');

test("We should return an Id number", () => {
    const Manager= new manager("klein", 45, "klein@gmail.com",123);
        expect(Manager.id).toBe(45);
        
});
