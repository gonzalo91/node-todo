

module.exports =  class RegisterAUser {

    constructor(authenticationRepository){
        this.authenticationRepository = authenticationRepository();
    }

    async call(name, username, password){

        console.log(this.authenticationRepository)
        if(!name || !username || ! password){
            throw new Error('All fields are required');
        }

        this.authenticationRepository.createUser(name, username, password);

    }

}