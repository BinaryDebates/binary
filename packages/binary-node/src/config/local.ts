import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import { UserService } from '../Users/UserService';

export function registerLocal() {
  // Use local strategy
  const userService = new UserService();
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (username, password, done) => {
        const { error, user, message } = await userService.authenticateUser(username, password);
        return done(error, user, message ? { message } : undefined);
      }
    )
  );
}
