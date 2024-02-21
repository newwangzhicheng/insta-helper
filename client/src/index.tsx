import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainScreen from './screens/main-screen'
import InstaScreen from './screens/insta-screen'
import HistoryScreen from './screens/history-screen'
import { Alert, StyleSheet } from 'react-native'
import { BlurView } from 'expo-blur'
import { useColorModeValue } from 'native-base'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import {useEffect} from 'react'
import { getItemAsync } from 'expo-secure-store'
import { update } from './store/sessionSlice'
import i18n from './locale'
import Icon from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator()

const App = () => {
  const insets = useSafeAreaInsets()
  const styles = StyleSheet.create({
    tabBar: {
      position: 'absolute',
      borderTopWidth: 0,
      height: 80
    },
    tabBarBg: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'transparent',
      overflow: 'hidden'
    }
  })

  // 从scurestore读取
  const dispatch = useDispatch()
  useEffect(() => {
    getItemAsync('session').then(value => {
      if (value) {
        dispatch(update(value))
      } else {
        // Alert.alert(
        //   i18n.t('Sign in to Instagram for the full experience'),
        //   '',
        //   [{ text: i18n.t('OK') }]
        // )
      }
    })
  }, [])

  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerBackground: () => (
          <BlurView
            intensity={20}
            tint={useColorModeValue('light', 'dark')}
            style={styles.tabBarBg}
          ></BlurView>
        ),
        tabBarShowLabel: true,
        tabBarBackground: () => (
          <BlurView
            intensity={20}
            tint={useColorModeValue('light', 'dark')}
            style={styles.tabBarBg}
          />
        ),
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#34a67c'
      }}
    >
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerTransparent: true,
          headerShown: true,
          headerTitle: '',
          tabBarIcon: ({color, size}) => (
            <Icon name='home' color={color} size={size} />
          ),
          tabBarLabel: i18n.t('Home'),
        }}
      />
      <Tab.Screen
        name="Insta"
        component={InstaScreen}
        options={{
          headerTransparent: true,
          headerShown: false,
          headerTitle: '',
          tabBarIcon: ({color, size}) => (
            <Icon name='instagram' color={color} size={size} />
          ),
          tabBarLabel: i18n.t('Instagram'),
        }}
      />
      {/*<Tab.Screen*/}
      {/*  name="History"*/}
      {/*  component={HistoryScreen}*/}
      {/*  options={{*/}
      {/*    tabBarIcon: ({color, size}) => (*/}
      {/*      <Icon name='clockcircleo' color={color} size={size} />*/}
      {/*    ),*/}
      {/*    tabBarLabel: i18n.t('History'),*/}
      {/*  }}*/}
      {/*/>*/}
    </Tab.Navigator>
  )
}

export default App
