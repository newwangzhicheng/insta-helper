import { NextFunction, Router, Request, Response } from 'express'
import Controller from '../interfaces/Controller.interface'
import PostModel from './post.model'
import { isAuthorized } from '../middlewares/auth.middleware'
import HttpException from '../exceptions/HttpException'
import SocketResponse from '../interfaces/SocketResponse.interface'

class PostController implements Controller {
  public path = '/post'
  public router: Router = Router()

  constructor() {
    this.initializeMiddleware()
    this.initializeRoutes()
  }

  private initializeMiddleware() {
    // this.router.use(isAuthorized)
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/shortcode`, this.getPostByShortcode)
  }

  private getPostByShortcode = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { shortcode, session } = req.body
      const response: SocketResponse = await new PostModel().findByShortcode({
        session,
        shortcode
      })

      res.send(response)
    } catch (Exception) {
      next(new HttpException(500, 'Internal error'))
    }
  }
}

export default PostController
