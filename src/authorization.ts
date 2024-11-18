import {Request, Response, NextFunction} from "express";

// NOTE: This is just one way to handle user authentication.
export default async function(req: Request, res: Response, next: NextFunction) {
  req.authenticatedUser = "123456789";

  next();
}
