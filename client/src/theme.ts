import { extendTheme } from 'native-base'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  },
  colors: {
    custom: {
      '50': '#b1f7de',
      '100': '#91f0cd',
      '200': '#73e6bc',
      '300': '#57daaa',
      '400': '#34d399',
      '500': '#33bf8c',
      '600': '#34a67c',
      '700': '#358e6d',
      '800': '#33785f',
      '900': '#316350'
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'custom'
      }
    }
  }
})

export default theme
