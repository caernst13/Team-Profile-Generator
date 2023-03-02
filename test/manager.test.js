const Manager = require('../lib/manager');

describe("Manager", () => {
    const manager = new Manager('josh', 12, 'email@email.com', 1203);
    test("initialization", () => {
            expect(manager).toEqual({
                name: 'josh',
                id: 12,
                email: 'email@email.com',
                role: 'Manager',
                officeNumber: 1203
              });
        
    });
    test("functional", () => {
        expect(manager.role).toBe('Manager');
    });
});