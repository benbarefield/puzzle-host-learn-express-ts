import {Request, Response, NextFunction} from "express";

export default function(userIdHolder: {id: string}) {
  return (req: Request, res: Response, next: NextFunction) => {
    req.authenticatedUser = userIdHolder.id;
    next();
  };
}
