import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import theme from '../theme'
import { Provider } from 'react-redux'
import store from '../store/store'

type Props = {
  children: React.ReactNode
}
export default function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>{props.children}</NativeBaseProvider>
      </Provider>
    </NavigationContainer>
  )
}
