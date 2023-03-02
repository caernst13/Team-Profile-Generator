const Intern = require('../lib/intern');

describe("Intern", () => {
    const intern = new Intern('joseph', 55, 'sillyemail@email', 'columbia');
    test("initialization", () => {
            expect(intern).toEqual({
                name: 'joseph',
                id: 55,
                email: 'sillyemail@email',
                role: 'Intern',
                school: 'columbia'
              });
        
    });
    test("functional", () => {
        expect(intern.name).toBe('joseph');
    });
});