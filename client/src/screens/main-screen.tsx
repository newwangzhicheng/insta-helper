import {Button, ScrollView, View} from 'native-base'
import SearchBar from '../components/search-bar'
import { StyleSheet } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
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
      <ScrollView contentContainerStyle={{
        paddingBottom: 120,
        paddingTop: 80
      }} padding={6} style={styles.scrollView}>
        <SearchBar />
      </ScrollView>
    </ScreenContainer>
  )
}
