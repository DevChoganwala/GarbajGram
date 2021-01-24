const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')


let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    points: {
        type: Number,
        default: 0
    }
})

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User',userSchema)