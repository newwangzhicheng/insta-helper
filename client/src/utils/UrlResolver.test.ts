import UrlResolver from './UrlResolver'

describe('UrlResolver', () => {
  it('获取非profile类型', () => {
    const urlResolver = new UrlResolver(
      'https://www.instagram.com/reel/C2C0EMMpoAH/?utm_source=ig_web_copy_link'
    )
    expect(urlResolver.getType()).toBe('reel')
  })

  it('获取shortcode', () => {
    const urlResolver = new UrlResolver(
      'https://www.instagram.com/reel/C2C0EMMpoAH/?utm_source=ig_web_copy_link'
    )
    expect(urlResolver.getShortcodeOrProfile()).toBe('C2C0EMMpoAH')
  })

  it('获取profile类型', () => {
    const urlResolver = new UrlResolver('www.instagram.com/_momo_rina_/')
    expect(urlResolver.getType()).toBe('profile')
  })
  it('获取profile', () => {
    const urlResolver = new UrlResolver('www.instagram.com/_momo_rina_/')
    expect(urlResolver.getShortcodeOrProfile()).toBe('_momo_rina_')
  })
})
