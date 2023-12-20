import { type PassportStatic } from 'passport';
import { UserService } from '../Users/UserService';
import { registerLocal } from './local';

export async function configurePassport(passport: PassportStatic): Promise<void> {
  const userService = new UserService();
  passport.serializeUser<string>((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser<string>(async (id, done) => {
    done(null, await userService.getUserById(id));
  });
  registerLocal();
}
