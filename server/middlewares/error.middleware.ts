import HttpException from "../exceptions/HttpException";
import {Request, Response} from "express";

export const error = (error: HttpException, req: Request, res: Response) => {
  const status = error.status || 500
  const message: string = error.message || 'Internal error'
  res.status(status).send({
    status,
    message
  })
}