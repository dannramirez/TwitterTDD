const UserService = require('../app/services/UserService');
class UserView {

    static createUser(payload) {
        if (payload === null) {
            return {
                error: "payload no existe"
            };
        }

        let dataValues = ['id', 'username', 'name'];

        for (var key in payload) {
            if (payload.hasOwnProperty(key)) {
                if (payload[key] === null || payload[key] === undefined) {
                    return {
                        error: `${key} necesitan tener un valor válido`
                    }
                }
            }
            dataValues = dataValues.filter(e => e !== key)
        }
        if (dataValues.length =! 0) {
            return {
                error: `${dataValues} necesitan tener un valor válido`
            }
        }
    }
}

module.exports = UserView;