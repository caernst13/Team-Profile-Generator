const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    const engineer = new Engineer('jacob', 13, 'crazyemail@email', 'jacobGitHub');
    test("initialization", () => {
            expect(engineer).toEqual({
                name: 'jacob',
                id: 13,
                email: 'crazyemail@email',
                role: 'Engineer',
                gitHub: 'jacobGitHub'
              });
        
    });
    test("functional", () => {
        expect(engineer.email).toBe('crazyemail@email');
    });
});