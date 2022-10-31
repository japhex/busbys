import { ReactNode } from 'react'

import { GridItem } from '@chakra-ui/react'

import { SHADOWS } from 'theme/shadows'

interface Props {
  children: ReactNode
}

export const Card = ({ children }: Props) => (
  <GridItem bg="WHITE" p={6} borderRadius="xl" _hover={{ boxShadow: SHADOWS.md }} transition="box-shadow 0.3s">
    {children}
  </GridItem>
)
