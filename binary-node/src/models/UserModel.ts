import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, {timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User;