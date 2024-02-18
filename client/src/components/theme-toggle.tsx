import { HStack, Text, Switch } from 'native-base'
import { useColorMode } from 'native-base'
import i18n from '../locale/index'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        size="lg"
      />
    </HStack>
  )
}
