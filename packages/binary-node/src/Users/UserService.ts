import { type User } from './User';
import * as bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { UserSchema } from './UserModel';
export class UserService {
  public async register(user: User) {
    try {
      const UserModel = mongoose.model('User', UserSchema);
      const userModel = {
        id: user.id,
        name: user.name,
        email: user.email,
        token: user.token,
        password: user.password,
        registrationDate: Date.now().toString(),
      };

      await UserModel.create(userModel);
    } catch (e) {
      throw new Error(`Failed to register user with error: ${e}`);
    }
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    const UserModel = mongoose.model('User', UserSchema);
    const user = await UserModel.findOne({ email });
    console.dir(user, { depth: null });

    return user;
  }

  authenticateUser = async (
    email: string,
    password: string,
  ): Promise<{
    error: any;
    user?: false | Express.User | undefined;
    message?: string;
  }> => {
    const user = await this.getUserByEmail(email);
    if (user == null) {
      return { error: null, user: false, message: 'No user with that email' };
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return { error: null, user };
      } else {
        return { error: null, user: false, message: 'Password incorrect' };
      }
    } catch (e) {
      return { error: e, user: false, message: 'Failed to authenticate user' };
    }
  };

  public async getUserById(id: string) {
    const UserModel = mongoose.model('User', UserSchema);
    return await UserModel.findOne((user: User) => user.id === id);
  }
}
