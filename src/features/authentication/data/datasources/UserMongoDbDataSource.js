module.exports = class UserMongoDbDataSource {

    constructor(userModel){
        this.userModel =  userModel()
    }

    create(
        user
    ){
        
        return this.userModel.create(user)

    }


}