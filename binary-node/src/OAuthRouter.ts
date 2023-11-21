import { json, Router } from "express";
import { User } from "./Users/User";
import { UserService } from "./Users/UserService";

export function OAuthRouter(userService: UserService) {
    const router = Router();


    router.post('/user/register', (req) => {
        const {user} = req.body;
        
        return userService.register(user);

    });

    return router;
}