import {Box, View} from "native-base";
import {BlurView} from "expo-blur";
import {StyleSheet} from "react-native";

export default function MenuBlur() {
  return (
    <Box>
      <Box w-full
           height={50}
      >
        <BlurView intensity={10}
                  style={styles.blurView}
        >
        </BlurView>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  blurView: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  }
})
