"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthRouter = void 0;
const express_1 = require("express");
function OAuthRouter(userService) {
    const router = (0, express_1.Router)();
    router.post('/user/register', (req) => {
        const { user } = req.body;
        return userService.register(user);
    });
    return router;
}
exports.OAuthRouter = OAuthRouter;
