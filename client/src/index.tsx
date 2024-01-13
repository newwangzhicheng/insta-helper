import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MainScreen from './screens/main-screen'
import InstaScreen from './screens/insta-screen'
import HistoryScreen from './screens/history-screen'
import MenuBlur from "./components/menu-blur";
import {ImageBackground, StyleSheet} from "react-native";
import HomeIcon from "./components/icons/home-icon";
import InstaIcon from "./components/icons/insta-icon";
import HistoryIcon from "./components/icons/history-icon";
import {BlurView} from "expo-blur";
import {useColorModeValue} from "native-base";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {bgImageLight} from "./utils/imageAssets";

const Tab = createBottomTabNavigator()

const App = () => {
  const insets = useSafeAreaInsets()
  const styles = StyleSheet.create({
    tabBar: {
      position: 'absolute',
      borderTopWidth: 0
    },
    tabBarBg: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'transparent',
      overflow: 'hidden'
    }
  })

  return (

    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerBackground: () => (
          <BlurView intensity={20} tint={useColorModeValue('light', 'dark')} style={styles.tabBarBg}></BlurView>
        ),
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <BlurView intensity={20} tint={useColorModeValue('light', 'dark')} style={styles.tabBarBg}/>
        ),
        tabBarStyle: styles.tabBar
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerTransparent: true,
          headerShown: true,
          headerTitle: '',
          tabBarIcon: () => <HomeIcon/>
        }}
      />
      <Tab.Screen
        name="Insta"
        component={InstaScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          headerTitle: '',
          tabBarIcon: () => <InstaIcon/>
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: () => <HistoryIcon/>
        }}
      />

    </Tab.Navigator>
  )
}


export default App
