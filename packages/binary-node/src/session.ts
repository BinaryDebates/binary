import { type Application, type RequestHandler } from 'express';
import session from 'express-session';
import csrf from 'csurf';

export function setupSessionForApp(app: Application) {
  app.set('trust proxy', 2);
}

export function getSessionMiddleware(): RequestHandler[] {
  const sessionSecret = '123';

  return [
    session({
      secret: sessionSecret,

      // don't persist unathenticated sessions
      saveUninitialized: false,

      // can safely set to false since RedisStore implements touch
      // https://github.com/expressjs/session#resave
      resave: false,

      cookie: { httpOnly: true, secure: 'auto' },
    }),
    csrf({ cookie: false, ignoreMethods: ['GET', 'HEAD', 'OPTIONS'] }),
    (req, res, next) => {
      res.locals.csrfToken = req.csrfToken();
      next();
    },
  ];
}
