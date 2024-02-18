interface SocketRequest {
  login: {
    username: string | null
    password: string | null
    isUseLogin: boolean
    session: string | null
  }
  type: {
    resource: resourceType
    action: actionType
  }
  content: contentType
}

export type resourceType = 'post' | 'password'
export type actionType = 'shortcode' | 'login'

export type shortcodeContent = {
  shortcode: string
}
export type loginContent = {
  username: string
  password: string
}
export type contentType = shortcodeContent | loginContent
export default SocketRequest
