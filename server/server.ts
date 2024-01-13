import 'dotenv/config'
import validateEnv from './utils/env'
import ConfigOptions from './interfaces/ConfigOptions.interface'
import App from './app'
import PostController from './post/post.controller'
import LoginController from "./login/login.controller";
import env from "./utils/env";

const configOptions: ConfigOptions = {
  port: env.PORT,
  version: env.VERSION,
  http2Enable: env.HTTP2_ENABLE,
  certPath: env.SSL_CERT,
  keyPath: env.SSL_KEY,
  socketHost: env.SOCKET_HOST,
  socketPort: env.SOCKET_PORT
}

const app = new App(
  [
  new LoginController(),
  new PostController()
  ],
  configOptions
)
app.listen()
