import SocketRequest from "../interfaces/SocketRequest.interface";
import App from "../app";

export default class LoginModel {
  public async loginByPassword(params: { username: string, password: string }) {
    const {username, password} = params
    const requestParams : SocketRequest = {
      login: {
        username,
        password,
        isUseLogin: true,
        session: null
      },
      type: {
        resource: 'password',
        action: 'login'
      },
      content: {
        username,
        password
      }
    }

    return await App.sendDataToSocket(requestParams)
  }
}