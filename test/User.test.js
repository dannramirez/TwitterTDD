const User = require('../app/User')

describe("Unit Tests for User class", () => {

    test('Create an User object', () => {
    const user = new User(1,"dannramirez","Dann","Bio");
    
    
    expect(user.id).toBe(1);
    expect(user.userName).toBe("dannramirez");
    expect(user.name).toBe("Dann");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
})

})