const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastUpdated: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//Use current schema if it exists, else create the schema
module.exports = mongoose.models.Store || mongoose.model('Store', StoreSchema)