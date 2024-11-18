import {Application, RequestHandler} from 'express';

export default function setupServer(app : Application, authMiddleware: RequestHandler, dataAccess: any) {
  app.use(authMiddleware);

  // todo: Add routes here
}
