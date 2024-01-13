import { Text, useColorModeValue } from 'native-base'
import AnimatedColorBox from './animated-color-box'
export default function Header() {
  return (
    <AnimatedColorBox bg={useColorModeValue('blueGray.50', 'blueGray.900')}>
      <Text>Header</Text>
    </AnimatedColorBox>
  )
}
