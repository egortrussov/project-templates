const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    username: String,
    password: String,
    fullName: String,
    organisation: String,
    isTeacher: Boolean,
    grade: {
        type: Number,
        required: false
    },
    featuredContests: {
        type: [String],
        default: []
    }
})

module.exports = mongoose.model('User', UserSchema)