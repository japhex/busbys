import { ReactNode } from 'react'

import { Center, ChakraProps } from '@chakra-ui/react'

import { SHADOWS } from 'theme/shadows'

interface Props {
  bg?: string
  contentBg?: string
  styles?: ChakraProps
  children: ReactNode
}

export const FloatBox = ({ bg = 'RED3', contentBg = 'lightYellow', styles, children }: Props) => (
  <Center bg={bg} px={28} position="relative">
    <Center
      w="80vw"
      bg={contentBg}
      py={20}
      px={16}
      borderRadius="xl"
      position="absolute"
      top="-50%"
      transform="translate(0%,-50%)"
      boxShadow={SHADOWS.default}
      {...styles}
    >
      {children}
    </Center>
  </Center>
)
