const UserService = require('../app/services/UserService');
class UserView {

    static createUser(payload) {
        if (payload === null) {
            return {
                error: "payload no existe"
            };
        }
        return payload;
    }
}

module.exports = UserView;