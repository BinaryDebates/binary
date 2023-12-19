import { type Express, Router } from 'express';
import { OAuthRouter } from './OAuthRouter';
import { UserService } from './Users/UserService';

export async function attachRoutes(app: Express) {
  const userService = new UserService();
  const oAuthRouter = OAuthRouter(userService);

  const apiRouter = Router();
  apiRouter.use(oAuthRouter);
  app.use('/api', apiRouter);
}
