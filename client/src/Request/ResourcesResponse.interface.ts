interface ResourcesResponse {
  isSuccess: boolean
  error: string
  errorCode: number
  type: 'post' | 'reel' | 'stories'
  content: Post
}

export interface Post {
  totalNodes: number
  caption: string
  author: string
  nodes: PostNode[]
}

export interface PostNode {
  isVideo: boolean
  url: string
  videoUrl: string | null
}

export default ResourcesResponse
