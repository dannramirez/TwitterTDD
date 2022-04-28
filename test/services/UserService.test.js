 const UserService = require('./../../app/services/UserService');

 describe('Test for UserService', () => { 
     test('1.Create a new user using the UserService', () => {
       const user = UserService.create(1, "dannramirez", "Dann");
       expect(user.username).toBe("dannramirez");
       expect(user.name).toBe("Dann");
       expect(user.id).toBe(1);
       expect(user.bio).not.toBeUndefined();
     });
     
  });