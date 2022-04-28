 const UserService = require('./../../app/services/UserService');

 describe('Test for UserService', () => { 
     test('1.Create a new user using the UserService', () => {
       const user = UserService.create(1, "dannramirez", "Dann");
       expect(user.userName).toBe("dannramirez");
       expect(user.name).toBe("Dann");
       expect(user.id).toBe(1);
       expect(user.bio).not.toBeUndefined();
     });

     test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "dannramirez", "Dann");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("dannramirez");
        expect(userInfoInList[2]).toBe("Dann");
        expect (userInfoInList[3]). toBe("Sin bio");
        });
     
  });