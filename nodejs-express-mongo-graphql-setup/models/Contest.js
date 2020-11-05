const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContestSchema = new Schema({
    name: String,
    subject: String,
    description: String,
    date: {
        day: Number,
        month: Number,
        year: Number
    },
    createdBy: String,
    grade: Number,
    website: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Contest', ContestSchema)