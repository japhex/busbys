import { tagAnatomy } from '@chakra-ui/anatomy'
import { extendTheme, createMultiStyleConfigHelpers } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

import { FONT_SIZES } from './fonts'
import { SHADOWS } from './shadows'
import { SPACING } from './spacing'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    textTransform: 'uppercase',
    bg: 'WHITE',
    borderRadius: '36px',
    fontWeight: 700,
    color: 'GREY5',
    paddingX: 14,
    letterSpacing: '0.04em',
  },
})

export const tagTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    variant: 'none',
  },
})

export const theme = extendTheme({
  space: SPACING,
  fontSizes: FONT_SIZES,
  shadows: SHADOWS,
  fonts: {
    clash: `"Clash"`,
    clashMedium: `"ClashMedium"`,
    satoshi: `"Satoshi"`,
    satoshiMedium: `"SatoshiMedium"`,
    satoshiBold: `"SatoshiBold"`,
  },
  colors: {
    blackPearl: '#FF95OO',
    lightYellow: '#F2E182',
    lightCoffee: '#8E8E93',
    alabaster: '#AEAE82',
    floralWhite: '#C7C7CC',
    busbyRed: '#D53F39',
    RED1: '#D73534',
    RED2: '#D21011',
    RED3: '#DE4917',
    SAND0: '#F9F7F4',
    SAND1: '#EAE4D9',
    SAND2: '#F5F5EB',
    SAND3: '#AEAEB2',
    SAND4: '#403727',
    GREY1: '#5E5D61',
    GREY2: '#3C3A41',
    GREY3: '#26262E',
    GREY4: '#0D0B12',
    GREY5: '#4A5568',
  },
  components: {
    Tag: tagTheme,
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'red.300' : 'red.500',
        }),
        secondary: {
          bg: 'BLACK',
          paddingX: 12,
          fontSize: 'md',
          color: 'WHITE',
        },
      },
      defaultProps: {
        size: 'lg',
        variant: 'sm',
        colorScheme: 'green',
      },
    },
  },
})
