import ResourcesResponse from './ResourcesResponse.interface'
import store from '../store/store'

export default class HttpRequest {
  static async getResourcesByShortcode(params: {
    type: string
    shortcode: string
  }): Promise<ResourcesResponse> {
    const { type, shortcode } = params
    const { session } = store.getState()
    const body = JSON.stringify({
      type,
      shortcode,
      session
    })
    console.log(`request body: ${body}`)
    const result = await fetch(`${store.getState().server}/api/v1/post/shortcode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    return result.json() as unknown as ResourcesResponse
  }
}
