interface Post {
  totalNodes: number
  caption: string
  author: string
  nodes: PostNode[]
}

interface PostNode {
  isVideo: boolean
  url: string
  videoUrl: string | null
}

export default Post
