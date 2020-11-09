const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    done: {
        type: Boolean,
        required: true,
        default: false,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'UserSchema',
    }
}, {
    collection: 'tasks'
})

module.exports = mongoose.model('TaskSchema', taskSchema);