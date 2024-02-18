import Controller from './interfaces/Controller.interface'
import ConfigOptions from './interfaces/ConfigOptions.interface'
import express from 'express'
import { readFileSync } from 'fs'
import spdy, { Server } from 'spdy'
import cookieSession from 'cookie-session'
import { error } from './middlewares/error.middleware'
import SocketRequest from './interfaces/SocketRequest.interface'
import SocketResponse from './interfaces/SocketResponse.interface'
import net from 'net'
import SocketException from './exceptions/SocketException'
import env from './utils/env'

class App {
  public app: express.Application
  public server: Server | express.Application
  public options: ConfigOptions
  public prefix: string

  constructor(controllers: Controller[], configOptions: ConfigOptions) {
    this.app = express()
    if (configOptions.http2Enable) {
      this.server = spdy.createServer(
        {
          key: readFileSync(configOptions.keyPath),
          cert: readFileSync(configOptions.certPath)
        },
        this.app
      )
    } else {
      this.server = this.app
    }

    this.options = configOptions
    this.prefix = `/api/${configOptions.version}`

    this.initializeMiddlewares()
    this.helloWorld()
    this.initializeControllers(controllers)
    this.initializeErrorHandler()
  }

  public listen() {
    this.server.listen(this.options.port, () => {
      console.log(`Insta Server started at port: ${this.options.port}`)
    })
  }

  static async sendDataToSocket(
    requestParams: SocketRequest
  ): Promise<SocketResponse> {
    const client = net.connect(env.SOCKET_PORT, env.SOCKET_HOST, () => {
      console.log('socket: connected')
      client.write(JSON.stringify(requestParams))
    })

    return new Promise<SocketResponse>((resolve, reject) => {
      client.on('data', data => {
        console.log(`socket: received data, ${data}`)
        resolve(JSON.parse(data.toString()))
        client.destroy()
      })
      client.on('error', error => {
        console.log(`socket: error, ${error.message}`)
        reject(new SocketException(10, error.message))
      })
      client.on('close', () => {
        console.log('socket: close')
      })
    })
  }

  private initializeMiddlewares() {
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(express.json())
    this.app.use(
      cookieSession({
        name: 'session',
        keys: ['hTUFh4XXJF', 'J64QwQVy1a'],
        expires: new Date(Date.now() + 360 * 24 * 100), // 100 days
        secure: true,
        httpOnly: true
      })
    )
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach(controller => {
      this.app.use(this.prefix, controller.router)
    })
  }

  private initializeErrorHandler() {
    this.app.use(error)
  }

  private helloWorld() {
    this.app.get('/', (req, res) => {
      res.send('Hello World')
    })
  }
}

export default App
