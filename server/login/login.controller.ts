import Controller from "../interfaces/Controller.interface";
import {Router, Request, Response, NextFunction} from "express";
import CryptoJS from 'crypto-js'
import LoginModel from "./login.model";
import HttpException from "../exceptions/HttpException";
import Login from "./login.interface";
import env from "../utils/env";

export default class LoginController implements Controller {
  public path = '/login'
  public router = Router()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.post(
      `${this.path}`,
      this.loginByPassword)
  }

  private loginByPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {username} = req.body
      const encryptedPassword = req.body.password

      const bytesPassword = CryptoJS.AES.decrypt(
        encryptedPassword,
        env.SECRET_KEY)
      const password = bytesPassword.toString(CryptoJS.enc.Utf8)

      const response = await new LoginModel().loginByPassword({
        username,
        password
      })

      req.session!.session = (response.content as Login).session
      res.send(response)
    } catch (Exception) {
      next(new HttpException(401, 'login error'))
    }
  }
}