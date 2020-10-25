const User = require('../../domain/entities/User')



module.exports =  class RegisterAUser {

    constructor(authenticationRepository){
        this.authenticationRepository = authenticationRepository();
    }

    async call(name, email, password){
        const userEntity = new User({ name, email, password } )
        try{
            
            const b = await this.authenticationRepository.createUser(userEntity);

            return Promise.resolve(b)
            
        }catch(e){
            return Promise.reject({
                "errors": [
                    {
                        "value": "email",
                        "msg": "Email Already Registered",
                        "param": "password",
                        "location": "body"
                    }
                ]
            })
        }
                
    }

}