import { extendTheme } from '@chakra-ui/react'

import { SPACING } from './spacing'

export const theme = extendTheme({
  space: SPACING,
  colors: {
    blackPearl: '#FF95OO',
    lightYellow: '#F2E182',
    lightCoffee: '#8E8E93',
    alabaster: '#AEAE82',
    floralWhite: '#C7C7CC',
    busbyRed: '#D53F39',
    RED1: '#D73534',
    RED2: '#D21011',
    SAND0: '#F9F7F4',
    SAND1: '#EAE4D9',
    SAND2: '#AEAEB2',
    SAND3: '#403727',
    GREY1: '#5E5D61',
    GREY2: '#3C3A41',
    GREY3: '#26262E',
    GREY4: '#0D0B12',
  },
})
