import {ScrollView} from 'native-base'
import SearchBar from '../components/search-bar'
import {StyleSheet} from "react-native";
import {useBottomTabBarHeight} from "@react-navigation/bottom-tabs";
import ThemeToggle from "../components/theme-toggle";
import ScreenContainer from '../components/screen-container'


export default function MainScreen() {
  const bottomTabBarHeight = useBottomTabBarHeight()
  const styles = StyleSheet.create({
    scrollView: {
      paddingBottom: bottomTabBarHeight
    }
  })
  return (
    <ScreenContainer>
      <ScrollView p={6} style={styles.scrollView} paddingTop={120}>
        <SearchBar/>
        <ThemeToggle/>
      </ScrollView>
    </ScreenContainer>
  )
}