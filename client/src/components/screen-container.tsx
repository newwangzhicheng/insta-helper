import {Box, useColorMode} from 'native-base'
import {ImageBackground, StyleSheet} from "react-native";
import {bgImageLight, bgImageDark} from "../utils/imageAssets";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";

type Props = {
  children: React.ReactNode
}

export default function ScreenContainer(props: Props) {
  const bottomTabBarHeight = useBottomTabBarHeight()
  const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
    }
  })
  const {colorMode} = useColorMode()
  const bgImage = colorMode === 'light' ? bgImageLight : bgImageDark
  return (
    <Box flex={1}>
      <ImageBackground source={bgImage} style={styles.background}>
        {props.children}
      </ImageBackground>
    </Box>
  )
}