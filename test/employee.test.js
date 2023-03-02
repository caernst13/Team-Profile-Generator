const Employee = require('../lib/employee')

describe("Employee", ()=> {
    const employee = new Employee('jared', 36, 'coolemail@email.com', 'offRole')
    test("initialization", () => {
        expect(employee).toEqual({
            name: 'jared',
            id: 36,
            email: 'coolemail@email.com',
            role: 'offRole'
        });
    });
    test("functional", () => {
        expect(employee.id).toBe(36);
    });
});