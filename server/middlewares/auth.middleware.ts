import {Request, Response, NextFunction} from "express";

export const isAuthorized = ((req:Request ,res: Response, next: NextFunction) => {
  res.locals.isAuthorized = false
  if(req.session) {
    const sessionData = req.session!
    if (sessionData.username && sessionData.session){
      res.locals.isAuthorized = true
    }
    next()
  }
})