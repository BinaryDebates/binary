"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt = __importStar(require("bcrypt"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserModel_1 = require("./UserModel");
class UserService {
    constructor() {
        this.authenticateUser = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.getUserByEmail(email);
            if (user == null) {
                return { error: 'Failed to login', user: false, message: 'No user with that email' };
            }
            try {
                if (yield bcrypt.compare(password, user.password)) {
                    return { error: null, user };
                }
                else {
                    return { error: 'Failed to login', user: false, message: 'Password incorrect' };
                }
            }
            catch (e) {
                return { error: e, user: false, message: 'Failed to authenticate user' };
            }
        });
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const UserModel = mongoose_1.default.model('User', UserModel_1.UserSchema);
                const userModel = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    token: user.token,
                    password: user.password,
                    registrationDate: Date.now().toString(),
                };
                yield UserModel.create(userModel);
            }
            catch (e) {
                throw new Error(`Failed to register user with error: ${e}`);
            }
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const UserModel = mongoose_1.default.model('User', UserModel_1.UserSchema);
            const user = yield UserModel.findOne({ email });
            console.dir(user, { depth: null });
            return user;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const UserModel = mongoose_1.default.model('User', UserModel_1.UserSchema);
            return yield UserModel.findOne((user) => user.id === id);
        });
    }
}
exports.UserService = UserService;
