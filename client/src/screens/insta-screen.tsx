import ScreenContainer from '../components/screen-container'
import { WebView } from 'react-native-webview'
import { StyleSheet } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CookieManager from '@react-native-cookies/cookies'
import { useDispatch } from 'react-redux'
import { update } from '../store/sessionSlice'
import { setItemAsync } from 'expo-secure-store'
import {Button, Flex, useToast, View} from "native-base";
import Icon from 'react-native-vector-icons/AntDesign'
import IconFeather from 'react-native-vector-icons/Feather'
import {useRef} from "react";
import {WebViewNavigation} from "react-native-webview/src/WebViewTypes";
import i18n from "../locale";
import * as Clipboard from 'expo-clipboard'

export default function InstaScreen() {
  const instaUrl = 'https://www.instagram.com'
  const bottomTabBarHeight = useBottomTabBarHeight()
  const insets = useSafeAreaInsets()
  const styles = StyleSheet.create({
    webView: {
      marginBottom: bottomTabBarHeight,
      opacity: 0.99,
      overflow: "hidden"
    }
  })
  const dispatch = useDispatch()
  const currentUrl = useRef('')
  const toast = useToast()
  const handleNavigationStateChange = (navState: WebViewNavigation) => {
    currentUrl.current = navState.url
    CookieManager.get('https://www.instagram.com').then(cookies => {
      const cookieStringAll = Object.values(cookies)
        .map(cookie => `${cookie.name}=${cookie.value}`)
        .join(';')
      dispatch(update(cookieStringAll))
      setItemAsync('session', cookieStringAll)
    })
  }

  const ref = useRef(null)
  const scrollToTop = () => {
    (ref.current as any).injectJavaScript(`
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    `)
  }
  const reload = () => {
    (ref.current as any).reload()
  }

  const copyUrl = async () => {
    await Clipboard.setStringAsync(currentUrl.current);
    toast.show({
      title: i18n.t('The URL has been copied to the clipboard'),
      placement: 'top'
    })
  }
  return (
    <ScreenContainer>
      <WebView
        ref={ref}
        source={{ uri: instaUrl }}
        style={styles.webView}
        marginTop={insets.top}
        sharedCookiesEnabled={true}
        allowsInlineMediaPlayback={true}
        onNavigationStateChange={handleNavigationStateChange}
      >
      </WebView>
      <Flex position="absolute" bottom={20} right={6}>
        <Button backgroundColor='rgba(0,0,0,0)'>
          <Icon onPress={scrollToTop} name="upcircleo" size={28} color="#316350" />
        </Button>
        <Button backgroundColor='rgba(0,0,0,0)'>
          <Icon onPress={reload} name="sync" size={24} color="#316350" />
        </Button>
        <Button backgroundColor='rgba(0,0,0,0)'>
          <IconFeather onPress={copyUrl} name="copy" size={24} color="#316350" />
        </Button>
      </Flex>
    </ScreenContainer>
  )
}
