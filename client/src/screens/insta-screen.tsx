import ScreenContainer from '../components/screen-container'
import { WebView } from 'react-native-webview'
import { StyleSheet } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CookieManager from '@react-native-cookies/cookies'
import { useDispatch } from 'react-redux'
import { update } from '../store/sessionSlice'
import { setItemAsync } from 'expo-secure-store'

export default function InstaScreen() {
  const instaUrl = 'https://www.instagram.com'
  const bottomTabBarHeight = useBottomTabBarHeight()
  const insets = useSafeAreaInsets()
  const styles = StyleSheet.create({
    webView: {
      marginBottom: bottomTabBarHeight
    }
  })
  const dispatch = useDispatch()
  const handleNavigationStateChange = () => {
    CookieManager.getAll(true).then(cookies => {
      const cookieStringAll = Object.values(cookies)
        .map(cookie => `${cookie.name}=${cookie.value}`)
        .join(';')
      dispatch(update(cookieStringAll))
      setItemAsync('session', cookieStringAll)
    })
  }
  return (
    <ScreenContainer>
      <WebView
        source={{ uri: instaUrl }}
        style={styles.webView}
        marginTop={insets.top}
        sharedCookiesEnabled={true}
        allowsInlineMediaPlayback={true}
        onNavigationStateChange={handleNavigationStateChange}
      ></WebView>
    </ScreenContainer>
  )
}
