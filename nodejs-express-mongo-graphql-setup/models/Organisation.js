const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrganisationSchema = new Schema({
    name: String,
    members: [String]
})

module.exports = mongoose.model('Organisation', OrganisationSchema)