module.exports = class UserMongoDbDataSource {

    constructor(userModel){
        this.userModel =  userModel()
    }

    create(
        user
    ){
        
        this.userModel.find((err, data)=>{
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        } )

        // this.userModel.create(user, (err, data)=>{
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log(data)
        //     }
        // } )
        // this.userModel.create(user, (err, data) =>{
        //     if(err){
        //         console.log(error)
        //     }else{
        //         console.log(data);
        //     }
        // })
        
    }


}