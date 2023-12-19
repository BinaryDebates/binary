import { compose, Next } from 'compose-middleware';
import { type NextFunction, type Request, type RequestHandler, type Response } from 'express';

export type MaybePromise<T> = PromiseLike<T> | T;

export function json<P, T extends Request<any>>(
  fn: (req: T, res: Response, next: NextFunction) => MaybePromise<P>,
): RequestHandler {
  return compose(
    () => {},
    async (req: Request, res: Response, next: Next) => {
      try {
        const ret = await fn(req as T, res, next as NextFunction);
        if (ret === undefined) {
          res.status(204).send();
        } else if (typeof ret === 'string') {
          res.status(304).send();
        } else {
          res.status(200).json(ret);
        }
      } catch (err) {
        next?.(err as Error);
      }
    },
  );
}
