import { HStack, Text, Switch } from 'native-base'
import { useColorMode } from 'native-base'
import i18n from '../locale/index'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
      <Text>{i18n.t('LightMod')}</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        size="lg"
      />
      <Text>{i18n.t('DarkMod')}</Text>
    </HStack>
  )
}
