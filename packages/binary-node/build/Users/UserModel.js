"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.UserSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    registrationDate: {
        type: Date,
        require: true,
    },
}, { timestamps: true });
module.exports = mongoose_1.default.model('User', exports.UserSchema);
