import {port, str, cleanEnv, host, makeValidator, bool} from 'envalid'
import path from "node:path";

const sslValidator = makeValidator<string>((ssl) => {
  const http2Enable = process.env.HTTP2_ENABLE === 'true' || process.env.HTTP2_ENABLE === 'True'
  if (http2Enable && !ssl) {
    throw new Error('SSL certification or key path is not defined on .env file')
  }
  return path.resolve(__dirname, ssl)
})

const env = cleanEnv(process.env, {
  NODE_ENV: str({choices: ['development', 'production']}),
  PORT: port(),
  VERSION: str(),
  HTTP2_ENABLE: bool(),
  SSL_CERT: sslValidator(),
  SSL_KEY: sslValidator(),
  SOCKET_PORT: port(),
  SOCKET_HOST: host(),
  SECRET_KEY: str()
})

export default env
