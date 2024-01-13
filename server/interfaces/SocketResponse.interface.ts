import {resourceType} from "./SocketRequest.interface";
import Post from "../post/post.interface";
import Login from "../login/login.interface";

interface SocketResponse {
  isSuccess: boolean,
  error: string,
  errorCode: number,
  type: resourceType | 'login',
  content: Post | Login
}

export default SocketResponse
