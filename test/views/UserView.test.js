const UserView = require('./../../views/UserView');

describe('Test for UserView', () => {
    test('Return an error object when try to create a new user with a null payload', () => {
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/payload no existe/);
    });

    test('Return an error object when try to create a new user with a payload with invalid properties', () => {
        const payload1 = {
            username: null,
            name: 12,
            id: "id"
        };
        const payload2 = {
            username: "dann",
            name: null,
            id: "id"
        };
        const payload3 = {
            username: "dann",
            name: 12,
            id: null
        };
        const result1 = UserView.createUser(payload1);
        const result2 = UserView.createUser(payload2);
        const result3 = UserView.createUser(payload3);
        expect(result1.error).toMatch(/necesitan tener un valor válido/);
        expect(result2.error).toMatch(/necesitan tener un valor válido/);
        expect(result3.error).toMatch(/necesitan tener un valor válido/);
    });

})