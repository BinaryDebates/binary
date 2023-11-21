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
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachRoutes = void 0;
const express_1 = require("express");
const OAuthRouter_1 = require("./OAuthRouter");
const UserService_1 = require("./Users/UserService");
function attachRoutes(app) {
    return __awaiter(this, void 0, void 0, function* () {
        const userService = new UserService_1.UserService();
        const oAuthRouter = (0, OAuthRouter_1.OAuthRouter)(userService);
        const apiRouter = (0, express_1.Router)();
        apiRouter.use(oAuthRouter);
    });
}
exports.attachRoutes = attachRoutes;
