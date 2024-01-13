import { StatusBar } from 'expo-status-bar'
import AppContainer from './src/components/app-container'
import Navigator from './src/index'

export default function App() {
  return (
    <AppContainer>
      <Navigator />
      <StatusBar style="auto"></StatusBar>
    </AppContainer>
  )
}
