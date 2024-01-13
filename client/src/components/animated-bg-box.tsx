import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {useColorMode, View} from 'native-base'
import {useEffect} from 'react'
import {ImageBackground, StyleSheet} from "react-native";
import usePrevious from "../utils/usePrevious";
import {bgImageDark, bgImageLight} from "../utils/imageAssets";

const AnimatedBox = Animated.createAnimatedComponent(ImageBackground)

const AnimatedBgBox = (props: any) => {
  const {colorMode} = useColorMode()
  const bgImage = colorMode === 'light' ? bgImageLight : bgImageDark
  const prevBgImage = colorMode === 'light' ? bgImageDark : bgImageLight
  const bgOpacity = 1
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = 0
  }, [bgOpacity])

  const animatedStyles = useAnimatedStyle(() => {
    progress.value = withTiming(1, {duration: 250})
    return {
      opacity: interpolateColor(
        progress.value,
        [0, 1],
        [1, 0]
      )
    }
  }, [bgOpacity])
  // const animatedStyles = {
  //   opacity: 1
  // }

  return (
    <View>
      {bgOpacity && <AnimatedBox {...props} style={animatedStyles} source={bgImage}/>}
      { <AnimatedBox {...props} style={{...animatedStyles, ...StyleSheet.absoluteFillObject}} source={prevBgImage}/>}
    </View>
  )
}

export default AnimatedBgBox
