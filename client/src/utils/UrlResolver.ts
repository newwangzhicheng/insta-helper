export default class UrlResolver {
  public url: string
  private urlArr: string[]
  private comIndex: number

  constructor(url: string) {
    this.url = url
    this.urlArr = this.url.split('/')
    this.comIndex = this.urlArr.findIndex(str => /instagram.com$/.test(str))
    if (this.comIndex === -1) {
      throw new Error('不支持的Url，可能不是一个instagram分享链接')
    }
  }

  public getType(): string {
    switch (this.urlArr[this.comIndex + 1]) {
      case 'p':
        return 'post'
      case 'stories':
      case 'reel':
        return this.urlArr[this.comIndex + 1]
      default:
        return 'profile'
    }
  }

  public getShortcodeOrProfile(): string {
    if (this.getType() === 'profile') {
      return this.urlArr[this.comIndex + 1]
    }
    return this.urlArr[this.comIndex + 2]
  }
}
