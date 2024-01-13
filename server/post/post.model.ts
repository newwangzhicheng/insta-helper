import SocketResponse from "../interfaces/SocketResponse.interface";
import App from "../app";
import SocketRequest from "../interfaces/SocketRequest.interface";


class PostModel {
  public async findByShortcode(params: {
    username: string,
    session: string | null,
    shortcode: string
  }): Promise<SocketResponse> {
    const {
      username,
      session,
      shortcode
    } = params

    const requestParams: SocketRequest = {
      login: {
        username,
        password: null,
        isUseLogin: false,
        session
      },
      type: {
        resource: 'post',
        action: 'shortcode'
      },
      content: {
        shortcode
      }
    }
    return await App.sendDataToSocket(requestParams)
  }
}

export default PostModel
