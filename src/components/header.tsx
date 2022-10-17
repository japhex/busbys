import { Box, Center, Text } from '@chakra-ui/react'

import Nav from './nav'

import { IconBusbySmall } from 'icons'

const Header = () => (
  <Center p={4} gap={4}>
    <IconBusbySmall w="42px" h="42px" ml={4} />
    <Text color="busbyRed">Busby's</Text>
    <Box ml="auto">
      <Nav />
    </Box>
  </Center>
)

export default Header
