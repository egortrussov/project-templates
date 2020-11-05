const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
    name,
    contests: []
})

module.exports = mongoose.model('Subject', SubjectSchema)