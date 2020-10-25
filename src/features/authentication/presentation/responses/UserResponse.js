module.exports = class UserResponse {


    constructor(jwtLibrary) {
        this.jwtLibrary = jwtLibrary();
    }

    async json(user) {
        let json = {}

        json.name = user.name;
        json._id = user._id;
        json.email = user.email;

        try {
            json.jwt = await this.jwtLibrary.sign(json, '12345', { 'expiresIn': '1h' });
        } catch (e) {
            throw e;
        }



        return json;
    }


}