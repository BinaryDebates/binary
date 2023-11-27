import { resolve } from 'path';
import { User } from './User';
import {UserModel} from './UserModel';

export class UserService{
    public async register(user: User){
        const userModel = new UserModel({
            id: user.id,
            name: user.name,
            email: user.email,
            token: user.token,
        })

        userModel.save();
    }
}