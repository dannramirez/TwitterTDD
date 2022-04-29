const UserService = require('../app/services/UserService');
class UserView {

    static createUser(payload) {
        if (payload === null) {
            return {
                error: "payload no existe"
            };
        }

        for (var key in payload) {
            if (payload.hasOwnProperty(key)) {
                if(payload[key] === null || payload[key] === undefined){
                    return{ error: `${key} necesitan tener un valor válido`}
                }
            }
        }

        return payload;
    }
}

module.exports = UserView;