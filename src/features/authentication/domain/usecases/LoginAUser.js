const User = require('../../domain/entities/User')



module.exports = class LoginAUser {

    constructor(authenticationRepository, bcrypt) {
        this.authenticationRepository = authenticationRepository();
        this.bcrypt = bcrypt();
    }

    async call(email, password) {

        const userEntity = new User({ email, password })

        try {

            const userDb = await this.authenticationRepository.findUser(userEntity);

            if (userDb == null)
                throw new Error("We couldn't find the user")

            if (!await this.bcrypt.compare(password, userDb.password))
                throw Error("The password doesn't match");

            return Promise.resolve(userDb)
        } catch (e) {

            return Promise.reject({
                "errors": [{
                    "value": "email",
                    "msg": e.message,
                    "param": "email",
                    "location": "body"
                }]
            })
        }

    }

}