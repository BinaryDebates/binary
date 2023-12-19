import { Router } from 'express';
import passport from 'passport';
import { type User } from './Users/User';
import { type UserService } from './Users/UserService';
import { json } from './utils';

export function OAuthRouter(userService: UserService) {
  const router = Router();

  router.post(
    '/user/register',
    json(async (req: { body: User }) => {
      const user: User = req.body;
      await userService.register(user);
    }),
  );

  router.post(
    '/user/login',
    json((req, res, next) => {
      passport.authenticate('local')(req, res, next);
    }),
  );

  router.get(
    '/user/logout',
    json((req, res) => {
      req.logOut({ keepSessionInfo: false }, () => {});
    }),
  );

  return router;
}
