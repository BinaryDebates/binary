import { type NextFunction, type Request, type Response } from 'express';

export function requiresLogin(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated()) {
    return res.status(401).send({
      message: 'User is not logged in',
    });
  }

  next();
}
