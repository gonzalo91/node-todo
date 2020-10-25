const User = require('../../domain/entities/User')



module.exports = class RegisterAUser {

    constructor(authenticationRepository, bcrypt) {
        this.authenticationRepository = authenticationRepository();
        this.bcrypt = bcrypt();
    }

    async call(name, email, password) {
        password = await this.bcrypt.hash(password, 5, );
        const userEntity = new User({ name, email, password })

        try {
            const b = await this.authenticationRepository.createUser(userEntity);
            return Promise.resolve(b)
        } catch (e) {
            return Promise.reject({
                "errors": [{
                    "value": "email",
                    "msg": "Email Already Registered",
                    "param": "password",
                    "location": "body"
                }]
            })
        }

    }

}