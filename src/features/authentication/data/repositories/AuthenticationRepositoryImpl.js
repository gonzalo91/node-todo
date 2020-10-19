
module.exports = class AuthenticationRepositoryImpl {

    constructor(
        userMongoDbDatasource
    ){
        this._userMongoDbDatasource = userMongoDbDatasource();
    }
    
    createUser( name , username, password){
        const user = {
            'name' : name,
            'username' : username,
            'password' : password,
        }

        this._userMongoDbDatasource.create(
            user
        )




    }
    
    

}