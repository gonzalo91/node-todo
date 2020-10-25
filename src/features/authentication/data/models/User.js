const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String,
        required : true,
    },
    email: {
        type: String,
        required : true,
        index : true,
        unique : true,
    },
    password: {
        type: String,
        required : true,
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('UserSchema', userSchema)