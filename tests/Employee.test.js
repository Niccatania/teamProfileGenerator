const Employee = require('/Users/niccatania/Desktop/bootcamp/teamProfileGenerator/lib/Employee.js');

test("We should return an Id number", () => {
    const employ= new Employee("klein", 45, "klein@gmail.com",123);
        expect(employ.name).toBe("klein");
        
});
