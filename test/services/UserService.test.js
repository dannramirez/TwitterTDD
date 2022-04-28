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
         expect(userInfoInList[3]).toBe("Sin bio");
     });

     test('3. Update username', () => {
         const user = UserService.create(1, "dannramirez", "Dann");
         UserService.updateUserUsername(user, "danno");
         expect(user.userName).toBe("danno");
     });

     test('4. Given a list of users give me the list of username', () => {
         const user1 = UserService.create(1, "dannramirez1", "Dann1");
         const user2 = UserService.create(2, "dannramirez2", "Dann2");
         const user3 = UserService.create(3, "dannramirez3", "Dann3");
         const usernames = UserService.getAllUsernames([user1, user2, user3]);
         expect(usernames).toContain("dannramirez1");
         expect(usernames).toContain("dannramirez2");
         expect(usernames).toContain("dannramirez3");
     });

 });