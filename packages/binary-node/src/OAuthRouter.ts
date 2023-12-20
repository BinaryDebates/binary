import { Router } from 'express';
import passport from 'passport';
import { type User } from './Users/User';
import { type UserService } from './Users/UserService';
import { json } from './utils';

export function OAuthRouter(userService: UserService) {
  const router = Router();

  router.post(
    '/user/register',
    json(async (req: { body: User }, res) => {
      const user: User = req.body;
      await userService.register(user);
      res.send({ message: 'success' });
    }),
  );

  router.post('/user/login', (req, res, next) => {
    console.log('login!!!');
    const status = passport.authenticate('local')(req, res, next);
    console.dir(status, { depth: null });
    res.send({ message: status !== undefined ? 'success' : 'failed to login' });
  });

  // TODO: error handle
  router.get(
    '/user/logout',
    json((req, res) => {
      req.logOut({ keepSessionInfo: false }, () => {});
      res.send({ message: 'successfully logged out' });
    }),
  );

  return router;
}
