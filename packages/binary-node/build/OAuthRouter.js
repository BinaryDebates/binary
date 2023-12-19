"use strict";
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
exports.OAuthRouter = void 0;
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const utils_1 = require("./utils");
function OAuthRouter(userService) {
    const router = (0, express_1.Router)();
    router.post('/user/register', (0, utils_1.json)((req) => __awaiter(this, void 0, void 0, function* () {
        const user = req.body;
        yield userService.register(user);
    })));
    router.post('/user/login', (0, utils_1.json)((req, res, next) => {
        passport_1.default.authenticate('local')(req, res, next);
    }));
    router.get('/user/logout', (0, utils_1.json)((req, res) => {
        req.logOut({ keepSessionInfo: false }, () => { });
    }));
    return router;
}
exports.OAuthRouter = OAuthRouter;
