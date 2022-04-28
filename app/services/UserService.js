const User = require('./../User');
class UserService {
    static create(id, username, name) {
        return new User(id, username, name, 'Sin bio');
    }

    static getInfo(obj) {
        return Object.values(obj);
    }

    static updateUserUsername(user, newUsername) {
        return (user.userName = newUsername);
    }

    static getAllUsernames(array) {
        const usernamesList = array.map((item) => item.userName);
        return usernamesList;
    }
}

module.exports = UserService;